import { Router } from "express";
import authRouter from "./auth";

const router: Router = Router();

enum EMainRoutes {
  AUTH = '/auth'
};

router.use(EMainRoutes.AUTH, authRouter);

export default router;
