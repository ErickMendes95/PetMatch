"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
async function create(userId, token) {
    return database_1.default.session.create({
        data: {
            token,
            userId,
        },
    });
}
const sessionRepository = {
    create,
};
exports.default = sessionRepository;
