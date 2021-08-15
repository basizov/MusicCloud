import { Model, Optional } from "sequelize";

export interface IUser {
  id: string;
  email: string;
  isEmailActivated: boolean;
  activationEmailLink: string;
  password: string;
  role: string;
};

export interface IUserCreationAttributes extends Optional<IUser, 'id'> { }

export interface IUserInstace extends Model<IUser, IUserCreationAttributes> { }
