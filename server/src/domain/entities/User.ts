import { DataTypes } from "sequelize";
import dbProvider from "../../dbProvider";
import { EUserRoles } from "../enums/EUserRoles";
import { IUserInstace } from "../interfaces/IUser";

const User = dbProvider.define<IUserInstace>('user', {
  id: {
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    type: DataTypes.UUID,
    unique: true
  },
  email: {
    type: DataTypes.STRING,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: EUserRoles.USER
  }
});

export default User;
