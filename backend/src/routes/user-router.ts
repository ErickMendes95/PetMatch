import { Router } from "express";
import { create, getUserById, login } from "../controller/user-controller";

const userRouter = Router();

userRouter.post("/login",login)
userRouter.post("/cadastro",create)
userRouter.get("/:id", getUserById)

export { userRouter };