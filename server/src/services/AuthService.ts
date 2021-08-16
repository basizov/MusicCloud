import ApplicationError from "../domain/entities/ApplicationError";
import User from "../domain/entities/User";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import EmailService from "./EmailService";
import TokenService from "./TokenService";
import { IUserDTO } from "../domain/dto/IUserDTO";
import config from "../configuration/config";

class AuthService {
  async register(email: string, password: string) {
    const candidate = await User.findOne({ where: { email } });

    if (candidate) {
      throw ApplicationError.badRequest('Пользователь с такм e-mail уже существует!');
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
    const userDto: IUserDTO = {
      id: user.getDataValue('id'),
      email: user.getDataValue('email'),
      isEmailActivated: user.getDataValue('isEmailActivated') || false
    };
    const tokens = TokenService.generateTokens(userDto);

    await TokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  };

  async activate(activationEmailLink: string) {
    const user = await User.findOne({ where: { activationEmailLink } });

    if (!user) {
      throw ApplicationError.badRequest('Неккоректная ссылка активации!');
    }
    user.set('isEmailActivated', true);
    await user.save();
  };
};

export default new AuthService();
