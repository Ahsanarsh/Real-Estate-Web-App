import dotenv from "dotenv";

dotenv.config();

if (!process.env.PORT) {
  throw new Error("PORT is not defined in the environment variables");
}

const config = {
  port: process.env.PORT || 3000,
};

export default config;
