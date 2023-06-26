"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function create(name, race, sex, image, city, state, species, size, weight) {
    return database_1.default.pet.create({
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
async function update(petId, isAdopted, userId) {
    return database_1.default.pet.update({
        where: { id: petId },
        data: {
            isAdopted,
            userId,
        },
    });
}
async function deletePet(petId) {
    return database_1.default.pet.delete({
        where: { id: petId },
    });
}
async function findByPetId(id) {
    return database_1.default.pet.findFirst({
        where: { id },
    });
}
async function getAll() {
    return database_1.default.pet.findMany();
}
const petRepository = {
    getAll,
    create,
    update,
    deletePet,
    findByPetId,
};
exports.default = petRepository;
