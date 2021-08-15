import { NextFunction, Request, Response } from "express";
import ApplicationError from "../domain/entities/ApplicationError";

const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ApplicationError) {
    return res.status(error.status).json({
      message: error.message,
      error: error
    });
  }
  return res.status(500).json({
    message: error.message,
    error: error
  });
};

export default errorMiddleware;
