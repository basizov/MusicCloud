import { NextFunction, Request, Response } from "express";
import config from "../configuration/config";
import { IUserDTO } from "../domain/dto/IUserDTO";
import ApplicationError from "../domain/entities/ApplicationError";
import TokenService from "../services/TokenService";

export interface IUserRequest extends Request {
  user: IUserDTO;
};

const authMiddleware = (req: IUserRequest, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader) {
      const accessToken = authorizationHeader.split(' ')[1];

      if (accessToken) {
        const userData = TokenService.validateToken(config.ACCESS_SECRET_KEY, accessToken);

        if (userData) {
          req.user = userData;
          next();
        }
        next(ApplicationError.notAuthorized('Не валидный токен пользователя!'));
      }
      next(ApplicationError.notAuthorized('Токен пользователя указан не верно!'));
    }
    next(ApplicationError.notAuthorized('Токен пользователя не указан!'));
  } catch (_) {
    next(ApplicationError.notAuthorized('Пользователь не авторизован!'));
  }
};

export default authMiddleware;
