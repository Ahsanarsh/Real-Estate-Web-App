import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authroute from "./routes/auth.route.js";
import testroute from "./routes/test.route.js";
import config from "./config/config.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authroute);
app.use("/api/test", testroute);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
