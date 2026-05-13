import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not defined in the environment variables");
}

if (!process.env.JWT_SECRET_KEY) {
  throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
}

const config = {
  port: process.env.PORT || 3000,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
};

export default config;
