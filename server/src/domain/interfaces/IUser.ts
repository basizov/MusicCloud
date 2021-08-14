import { Model, Optional } from "sequelize/types";

export interface IUser {
  id: string;
  email: string;
  password: string;
  role: string;
};

export interface IUserCreationAttributes extends Optional<IUser, 'id'> { }

export interface IUserInstace extends Model<IUser, IUserCreationAttributes> { }
