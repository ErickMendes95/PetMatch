"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const pet_repository_1 = __importDefault(require("../repository/pet-repository"));
async function getAll() {
    const pets = await pet_repository_1.default.getAll();
    if (pets.length === 0)
        throw (0, error_1.NotFoundError)();
    return pets;
}
async function getPetById(petId) {
    if (!petId)
        throw (0, error_1.UnprocessableEntityError)();
    const pet = await pet_repository_1.default.findByPetId(petId);
    if (!pet)
        throw (0, error_1.NotFoundError)();
    return pet;
}
async function create(name, race, sex, image, city, state, species, size, weight) {
    if (!name ||
        !race ||
        !sex ||
        !image ||
        !city ||
        !state ||
        !species ||
        !size ||
        !weight)
        throw (0, error_1.UnprocessableEntityError)();
    await pet_repository_1.default.create(name, race, sex, image, city, state, species, size, weight);
    return;
}
async function update(petId, isAdopted, userId) {
    if (!petId)
        throw (0, error_1.UnprocessableEntityError)();
    const pet = await pet_repository_1.default.findByPetId(petId);
    if (!pet)
        throw (0, error_1.NotFoundError)();
    // if (isAdopted !== undefined && !isAdopted) throw BadRequestError();
    // if (userId !== undefined && !userId) throw BadRequestError();
    await pet_repository_1.default.update(petId, isAdopted, userId);
    return;
}
async function deletePet(petId) {
    if (!petId)
        throw (0, error_1.UnprocessableEntityError)();
    const pet = await pet_repository_1.default.findByPetId(petId);
    if (!pet)
        throw (0, error_1.NotFoundError)();
    await pet_repository_1.default.deletePet(petId);
    return;
}
const petService = {
    getAll,
    getPetById,
    create,
    update,
    deletePet,
};
exports.default = petService;
