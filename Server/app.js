import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes/auth.route.js";
import config from "./config/config.js";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
