"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user-controller");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/login", user_controller_1.login);
userRouter.post("/cadastro", user_controller_1.create);
userRouter.get("/:id", user_controller_1.getUserById);