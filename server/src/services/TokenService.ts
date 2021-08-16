import { sign } from "jsonwebtoken";
import config from "../configuration/config";
import RefreshToken from "../domain/entities/RefreshToken";
import { IUserDTO } from "../domain/dto/IUserDTO";
import { v4 } from "uuid";

class TokenService {
  generateTokens(payload: IUserDTO) {
    const accessToken = sign(payload, config.ACCESS_SECRET_KEY, {
      expiresIn: '15m'
    });
    const refreshToken = sign(payload, config.REFRESH_SECRET_KEY, {
      expiresIn: '15d'
    });

    return {
      accessToken,
      refreshToken
    }
  };

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await RefreshToken.findOne({ where: { userId } });

    if (tokenData) {
      tokenData.set('token', refreshToken);
      return tokenData.save();
    }
    const tokenId = v4();
    const token = await RefreshToken.create({
      id: tokenId,
      userId: userId,
      token: refreshToken
    });

    return (token);
  };
};

export default new TokenService();
