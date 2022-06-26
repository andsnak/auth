import { Router } from "express";
import User from "./user";

const rootRouter = Router();

rootRouter.use("/user", User);

export default rootRouter;
