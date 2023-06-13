import { Sex, Size } from "@prisma/client";
import prisma from "../config/database";

async function create(
  name: string,
  race: string,
  sex: Sex,
  image: string,
  city: string,
  state: string,
  species: string,
  size: Size,
  weight: number
) {
  return prisma.pet.create({
    data: {
      name,
      race,
      sex,
      image,
      city,
      state,
      species,
      size,
      weight
    },
  });
}

async function update(petId: number, isAdopted?: boolean, userId?: number) {
  return prisma.pet.update({
    where: { id: petId },
    data: {
      isAdopted,
      userId,
    },
  });
}

async function deletePet(petId: number) {
  return prisma.pet.delete({
    where: { id: petId },
  });
}

async function findByPetId(petId: number) {
  return prisma.pet.findFirst({
    where: { id: petId },
  });
}

async function getAll() {
  return prisma.pet.findMany();
}
const petRepository = {
  getAll,
  create,
  update,
  deletePet,
  findByPetId,
};

export default petRepository;
