import { User } from "@prisma/client";
import prisma from "../config/database";
import { createUser } from "../protocols";


async function create({name, email, password}: createUser) {
  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
}

async function findUserByEmail(email: string) {
  return await prisma.user.findFirst({
    where: { email },
  });
}

async function getUserById(id: number){
  return await prisma.user.findUnique({
    where: {id},
    select: {
      id: true,
      name: true, 
      email: true,
    }
  })
}

const userRepository = {
  create,
  findUserByEmail,
  getUserById
};

export default userRepository;
