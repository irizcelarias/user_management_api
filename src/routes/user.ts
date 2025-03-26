import { Router } from "express";
import { createUser, getAllUsers, deleteUser } from "../controllers/userController";

const router = Router();

router.post("/users", createUser);
router.get("/users", getAllUsers); 
router.delete("/users/:id", deleteUser);

export default router;
