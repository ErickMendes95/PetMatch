import {
  ConflictError,
  InvalidCredentialsError,
  NotFoundError,
  UnprocessableEntityError,
} from "../error";
import userRepository from "../repository/user-repository";
import sessionRepository from "../repository/session-repository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function create(name: string, email: string, password: string) {
  const userExist = await userRepository.findUserByEmail(email);
  if (userExist) throw ConflictError();

  const hashPassword = await bcrypt.hash(password, 10);

  await userRepository.create({name, email, password: hashPassword});
  return;
}

async function login(email: string, password: string) {
  const userExist = await userRepository.findUserByEmail(email);
  if (!userExist) throw NotFoundError();

  const passwordMatch = bcrypt.compareSync(password, userExist.password);
  if (!passwordMatch) throw InvalidCredentialsError();

  const jwtSecret = process.env.JWT_SECRET || "";
  const token = jwt.sign({ userId: userExist.id }, jwtSecret);
  await sessionRepository.create(userExist.id, token);

  return token;
}

async function getUserById(id: number) {
  if(!id) throw UnprocessableEntityError();

  const userExist = await userRepository.getUserById(id);
  if (!userExist) throw NotFoundError();

  return userExist;
}

const userService = {
  create,
  login,
  getUserById
};

export default userService;
