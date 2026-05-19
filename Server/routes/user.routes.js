import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  notification,
  profilePosts,
  savePost,
} from "../controllers/user.controller.js";
import verifyToken from "../middleware/verifyToken.js";
const route = Router();

route.get("/", getUsers);
route.get("/notification", verifyToken, notification);
route.get("/profilePosts", verifyToken, profilePosts);
route.post("/save", verifyToken, savePost);
route.get("/:id", verifyToken, getUser);
route.put("/:id", verifyToken, updateUser);
route.delete("/:id", verifyToken, deleteUser);

export default route;
