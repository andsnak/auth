import { Router } from "express";
// import { verifyToken } from "../middlewares";
import AuthRoute from "./auth-route";

const rootRouter = Router();

// rootRouter.use([verifyToken]);
rootRouter.use("/auth", AuthRoute);

export default rootRouter;
