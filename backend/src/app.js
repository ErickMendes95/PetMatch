"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var middleware_1 = require("./middleware");
var routes_1 = require("./routes");
dotenv_1.default.config();
var app = (0, express_1.default)();
app
    .use((0, cors_1.default)())
    .use(express_1.default.json())
    .use("/pet", routes_1.petRouter)
    .use("/user", routes_1.userRouter)
    .use(middleware_1.handleAppErrors);
//Routes
exports.default = app;
