import { Sex, Size } from "@prisma/client";
import {
  BadRequestError,
  NotFoundError,
  UnprocessableEntityError,
} from "../error";
import petRepository from "../repository/pet-repository";

async function getAll() {
  const pets = await petRepository.getAll();
  if (pets.length === 0) throw NotFoundError();

  return pets;
}

async function getPetById(petId: number) {
  if (!petId) throw UnprocessableEntityError();

  const pet = await petRepository.findByPetId(petId);
  if (!pet) throw NotFoundError();

  return pet;
}

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
  if (
    !name ||
    !race ||
    !sex ||
    !image ||
    !city ||
    !state ||
    !species ||
    !size ||
    !weight
  )
    throw UnprocessableEntityError();

  await petRepository.create(
    name,
    race,
    sex,
    image,
    city,
    state,
    species,
    size,
    weight
  );
  return;
}

async function update(petId: number, isAdopted?: boolean, userId?: number) {
  if (!petId) throw UnprocessableEntityError();

  const pet = await petRepository.findByPetId(petId);
  if (!pet) throw NotFoundError();

  // if (isAdopted !== undefined && !isAdopted) throw BadRequestError();
  // if (userId !== undefined && !userId) throw BadRequestError();

  await petRepository.update(petId, isAdopted, userId);
  return;
}

async function deletePet(petId: number) {
  if (!petId) throw UnprocessableEntityError();

  const pet = await petRepository.findByPetId(petId);
  if (!pet) throw NotFoundError();

  await petRepository.deletePet(petId);
  return;
}

const petService = {
  getAll,
  getPetById,
  create,
  update,
  deletePet,
};

export default petService;
