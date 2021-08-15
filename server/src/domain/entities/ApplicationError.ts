import { IApplicationError } from "../interfaces/IApplicationError";

class ApplicationError extends Error {
  status: number = 0;
  message: string = '';

  constructor({ status, message }: IApplicationError) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message: string) {
    return new ApplicationError({
      status: 400,
      message: message
    });
  };

  static notAuthorized(message: string) {
    return new ApplicationError({
      status: 401,
      message: message
    });
  };

  static notFound(message: string) {
    return new ApplicationError({
      status: 404,
      message: message
    });
  };

  static internal(message: string) {
    return new ApplicationError({
      status: 500,
      message: message
    });
  };
};

export default ApplicationError;
