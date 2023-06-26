"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.petRouter = void 0;
var express_1 = require("express");
var pet_controller_1 = require("../controller/pet-controller");
var petRouter = (0, express_1.Router)();
exports.petRouter = petRouter;
petRouter.get("", pet_controller_1.getAll);
petRouter.get("/:id", pet_controller_1.getPetById);
petRouter.post("", pet_controller_1.create);
petRouter.put("/:petId", pet_controller_1.update);
petRouter.delete("/:petId", pet_controller_1.deletePet);