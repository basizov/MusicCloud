import ApplicationError from "../domain/entities/ApplicationError";
import User from "../domain/entities/User";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import EmailService from "./EmailService";
import TokenService from "./TokenService";
import { IUserDTO } from "../domain/dto/IUserDTO";
import config from "../configuration/config";
import { IUserInstace } from "../domain/interfaces/IUser";

class AuthService {
  async register(email: string, password: string) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApplicationError.badRequest('Пользователь с данным e-mail уже существует!');
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const activationLink = v4();
    const userId = v4();
    const user = await User.create({
      id: userId,
      email: email,
      password: hashPassword,
      activationEmailLink: activationLink
    });

    await EmailService.sendActivationEmail(email, `${config.BASE_URL}/api/activate/${activationLink}`);
    return (await this.createAndSaveTokens(user));
  };

  async login(email: string, password: string) {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw ApplicationError.badRequest('Пользователь с данным e-mail не существует!');
    }
    const isPasswordValid = await bcrypt.compare(password, user.getDataValue('password'));

    if (!isPasswordValid) {
      throw ApplicationError.badRequest('Невырный пароль!');
    }
    return (await this.createAndSaveTokens(user));
  };

  async activate(activationEmailLink: string) {
    const user = await User.findOne({ where: { activationEmailLink } });

    if (!user) {
      throw ApplicationError.badRequest('Неккоректная ссылка активации!');
    }
    user.set('isEmailActivated', true);
    await user.save();
  };

  private async createAndSaveTokens(user: IUserInstace) {
    const userDto: IUserDTO = {
      id: user.getDataValue('id'),
      email: user.getDataValue('email'),
      isEmailActivated: user.getDataValue('isEmailActivated') || false
    };
    const tokens = TokenService.generateTokens(userDto);

    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
};

export default new AuthService();
