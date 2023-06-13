"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePet = exports.update = exports.create = exports.getPetById = exports.getAll = void 0;
const http_status_1 = __importDefault(require("http-status"));
const pet_service_1 = __importDefault(require("../service/pet-service"));
async function getAll(req, res, next) {
    try {
        const pets = await pet_service_1.default.getAll();
        return res.status(http_status_1.default.OK).send(pets);
    }
    catch (error) {
        next(error);
    }
}
exports.getAll = getAll;
async function getPetById(req, res, next) {
    const petId = +req.params.id;
    try {
        const pet = await pet_service_1.default.getPetById(petId);
        return res.status(http_status_1.default.OK).send(pet);
    }
    catch (error) {
        next(error);
    }
}
exports.getPetById = getPetById;
async function create(req, res, next) {
    const { name, race, sex, image, city, state, species, size, weight } = req.body;
    try {
        await pet_service_1.default.create(name, race, sex, image, city, state, species, size, weight);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
}
exports.create = create;
async function update(req, res, next) {
    const petId = +req.params.petId;
    const { isAdopted, userId } = req.body;
    try {
        await pet_service_1.default.update(petId, isAdopted, userId);
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (error) {
        next(error);
    }
}
exports.update = update;
async function deletePet(req, res, next) {
    const petId = +req.params.petId;
    try {
        await pet_service_1.default.deletePet(petId);
        return res.sendStatus(http_status_1.default.OK);
    }
    catch (error) {
        next(error);
    }
}
exports.deletePet = deletePet;
