"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAppErrors = void 0;
const http_status_1 = __importDefault(require("http-status"));
function handleAppErrors(err, _req, res, _next) {
    if (err.name === "BadRequestError")
        return res.status(http_status_1.default.BAD_REQUEST).send({ message: err.message });
    if (err.name === "ConflictError")
        return res.status(http_status_1.default.CONFLICT).send({ message: err.message });
    if (err.name === "DuplicatedEmailError")
        return res.status(http_status_1.default.CONFLICT).send({ message: err.message });
    if (err.name === "InvalidCredentialsError")
        return res.status(http_status_1.default.UNAUTHORIZED).send({ message: err.message });
    if (err.name === "NotFoundError")
        return res.status(http_status_1.default.NOT_FOUND).send({ message: err.message });
    if (err.name === "UnauthorizedError")
        return res.status(http_status_1.default.UNAUTHORIZED).send({ message: err.message });
    if (err.name === "UnprocessableEntityError")
        return res
            .status(http_status_1.default.UNPROCESSABLE_ENTITY)
            .send({ message: err.message });
    return res
        .status(http_status_1.default.INTERNAL_SERVER_ERROR)
        .send({ error: "InternalServerError", message: "Internal Server Error!" });
}
exports.handleAppErrors = handleAppErrors;
