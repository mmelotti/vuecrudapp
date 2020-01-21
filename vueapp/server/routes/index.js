import { Router } from "express";
import authRouter from "./v1/auth";
import postRoutes from "./v1/worker.route";

const v1Router = new Router();
v1Router.use("/api/v1/auth", authRouter);
v1Router.use("/api/v1/worker", postRoutes);

export default v1Router;
