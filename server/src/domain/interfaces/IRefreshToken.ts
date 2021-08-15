import { Model, Optional } from "sequelize";

export interface IRefreshToken {
  id: string;
  userId: string;
  token: string;
};

export interface IRefreshTokenCreationAttributes extends Optional<IRefreshToken, 'id'> { }

export interface IRefreshTokenInstace extends Model<IRefreshToken, IRefreshTokenCreationAttributes> { }
