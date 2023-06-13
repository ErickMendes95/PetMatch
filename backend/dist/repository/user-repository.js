"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function create({ name, email, password }) {
    return await database_1.default.user.create({
        data: {
            name,
            email,
            password,
        },
    });
}
async function findUserByEmail(email) {
    return await database_1.default.user.findFirst({
        where: { email },
    });
}
async function getUserById(id) {
    return await database_1.default.user.findUnique({
        where: { id },
        select: {
            id: true,
            name: true,
            email: true,
        }
    });
}
const userRepository = {
    create,
    findUserByEmail,
    getUserById
};
exports.default = userRepository;
