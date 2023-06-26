"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidCredentialsError = void 0;
function InvalidCredentialsError() {
    return {
        name: 'InvalidCredentialsError',
        message: 'Email and/or password is/are incorrect',
    };
}
exports.InvalidCredentialsError = InvalidCredentialsError;
