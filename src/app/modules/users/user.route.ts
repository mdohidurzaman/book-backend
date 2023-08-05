import express from "express";
import { UserController } from "./user.controller";
const router = express.Router();

router.post("/signup", UserController.createUser);
router.patch("/:id", UserController.updateUser);
router.get("/", UserController.getAllUsers);
router.get("/:id", UserController.getSingleUser);
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;
