import Express from "express";
import Mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./config";
import v1Router from "./routes";
import authRouter from "./routes/v1/auth";

dotenv.config();

Mongoose.connect(config.dabaseUrl, {
  useNewUrlParser: true
});
const app = Express();
app.use("api/v1/auth", authRouter);

app.listen(3000, () => {
  console.log("server started OK");
});
