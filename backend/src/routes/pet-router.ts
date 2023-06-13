import { Router } from "express";
import {
  create,
  update,
  deletePet,
  getAll,
  getPetById,
} from "../controller/pet-controller";

const petRouter = Router();

petRouter.get("", getAll);
petRouter.get("/:id", getPetById);
petRouter.post("", create);
petRouter.put("/:petId", update);
petRouter.delete("/:petId", deletePet);

export { petRouter };
