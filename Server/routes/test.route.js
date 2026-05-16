import { Router } from "express";
import verifyToken from "../middleware/verifyToken.js";
import { register, login } from "../controllers/auth.controller.js";
import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller.js";

const route = Router();

route.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);
route.get("/should-be-admin", shouldBeAdmin);

export default route;
