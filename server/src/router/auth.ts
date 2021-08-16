import { Router } from "express";
import AuthController from "../controllers/AuthController";

const authRouter: Router = Router();

export enum EAuthRoutes {
  REGISTER = '/register',
  LOGIN = '/login',
  LOGOUT = '/logout',
  ACTIVATE_EMAIL = '/activate/:linkFromEmail',
  REFRESH = '/refresh'
};

authRouter.post(EAuthRoutes.REGISTER, AuthController.register);
authRouter.post(EAuthRoutes.LOGIN, AuthController.login);
authRouter.post(EAuthRoutes.LOGOUT, AuthController.logout);
authRouter.get(EAuthRoutes.ACTIVATE_EMAIL, AuthController.activate);
authRouter.get(EAuthRoutes.REFRESH, AuthController.refresh);

export default authRouter;
