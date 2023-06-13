"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.login = exports.create = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = __importDefault(require("../service/user-service"));
async function create(req, res, next) {
    const { name, email, password } = req.body;
    try {
        await user_service_1.default.create(name, email, password);
        return res.sendStatus(http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
}
exports.create = create;
async function login(req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await user_service_1.default.login(email, password);
        return res.status(http_status_1.default.OK).send(user);
    }
    catch (error) {
        next(error);
    }
}
exports.login = login;
async function getUserById(req, res, next) {
    const id = +req.params.id;
    try {
        const user = await user_service_1.default.getUserById(id);
        return res.status(http_status_1.default.OK).send(user);
    }
    catch (error) {
        next(error);
    }
}
exports.getUserById = getUserById;
