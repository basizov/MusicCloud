import { NextFunction, Request, Response } from "express";

class AuthController {
  async register(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
      const error = e as Error;

      next(error);
    }
  };

  async login(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
      const error = e as Error;

      next(error);
    }
  };

  async logout(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
      const error = e as Error;

      next(error);
    }
  };

  async activate(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
      const error = e as Error;

      next(error);
    }
  };

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {

    } catch (e) {
      const error = e as Error;

      next(error);
    }
  };
};

export default new AuthController();
