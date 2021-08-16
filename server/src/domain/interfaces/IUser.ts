import { Model, Optional } from "sequelize";

export interface IUser {
  id: string;
  email: string;
  activationEmailLink: string;
  password: string;
  isEmailActivated?: boolean;
  role?: string;
};

export interface IUserCreationAttributes extends Optional<IUser, 'id'> { }

export interface IUserInstace extends Model<IUser, IUserCreationAttributes> { }
