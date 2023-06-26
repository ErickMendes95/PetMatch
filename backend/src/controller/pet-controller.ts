import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import petService from "../service/pet-service";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const pets = await petService.getAll();
    return res.status(httpStatus.OK).send(pets);
  } catch (error) {
    next(error);
  }
}

export async function getPetById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const id = +req.params.id as number;

  try {
    const pet = await petService.getPetById(id);
    return res.status(httpStatus.OK).send(pet);
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  const { name, race, sex, image, city, state, species, size, weight } = req.body;

  try {
    await petService.create(name, race, sex, image, city, state, species, size, weight);
    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  const petId = +req.params.petId;
  const { isAdopted, userId } = req.body;

  try {
    await petService.update(petId, isAdopted, userId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}

export async function deletePet(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const petId = +req.params.petId;
  try {
    await petService.deletePet(petId);
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    next(error);
  }
}
