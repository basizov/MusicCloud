import express, { json } from "express";
import cors from "cors";
import config from "./configuration/config";
import dbProvider from "./dbProvider";
import User from './domain/entities/User';

const PORT = config.PORT;
const application = express();

application.use(cors);
application.use(json());

const startApp = async () => {
  try {
    console.log(dbProvider.models);
    await dbProvider.authenticate();
    await User.sync();
    application.listen(PORT, () => console.log(`Server started on ${PORT} port!`));
  } catch (e) {
    console.error(e as Error);
  }
};

startApp();
