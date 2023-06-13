import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import userService from "../service/user-service";
import { createUser } from "../protocols";

export async function create(req: Request, res: Response, next: NextFunction) {
  const { name, email, password } = req.body as createUser;
  try {
    await userService.create(name, email, password);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  try {
    const user = await userService.login(email, password);
    return res.status(httpStatus.OK).send(user);
  } catch (error) {
    next(error);
  }
}

export async function getUserById(req: Request, res: Response, next: NextFunction){
  const id = +req.params.id as number;
  try {
    const user = await userService.getUserById(id);
    return res.status(httpStatus.OK).send(user);
  } catch (error) {
    next(error);
  }
}