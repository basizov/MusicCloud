import { Sequelize } from "sequelize";
import config from "./configuration/config";
import User from "./domain/entities/User";

const dbProvider = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT
  }
);

export default dbProvider;
