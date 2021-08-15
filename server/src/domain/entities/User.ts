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
    unique: true,
    allowNull: false
  },
  isEmailActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  activationEmailLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: EUserRoles.USER,
    allowNull: false
  }
});

export default User;
