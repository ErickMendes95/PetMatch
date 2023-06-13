"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("../error");
const user_repository_1 = __importDefault(require("../repository/user-repository"));
const session_repository_1 = __importDefault(require("../repository/session-repository"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function create(name, email, password) {
    const userExist = await user_repository_1.default.findUserByEmail(email);
    if (userExist)
        throw (0, error_1.ConflictError)();
    const hashPassword = await bcrypt_1.default.hash(password, 10);
    await user_repository_1.default.create({ name, email, password: hashPassword });
    return;
}
async function login(email, password) {
    const userExist = await user_repository_1.default.findUserByEmail(email);
    if (!userExist)
        throw (0, error_1.NotFoundError)();
    const passwordMatch = bcrypt_1.default.compareSync(password, userExist.password);
    if (!passwordMatch)
        throw (0, error_1.InvalidCredentialsError)();
    const jwtSecret = process.env.JWT_SECRET || "";
    const token = jsonwebtoken_1.default.sign({ userId: userExist.id }, jwtSecret);
    await session_repository_1.default.create(userExist.id, token);
    return token;
}
async function getUserById(id) {
    if (!id)
        throw (0, error_1.UnprocessableEntityError)();
    const userExist = await user_repository_1.default.getUserById(id);
    if (!userExist)
        throw (0, error_1.NotFoundError)();
    return userExist;
}
const userService = {
    create,
    login,
    getUserById
};
exports.default = userService;
