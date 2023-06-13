"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server
    .use((0, cors_1.default)())
    .use(express_1.default.json());
//Routes
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
exports.default = server;