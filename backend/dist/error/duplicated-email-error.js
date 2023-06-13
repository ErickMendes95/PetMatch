"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicatedEmailError = void 0;
function DuplicatedEmailError() {
    return {
        name: 'DuplicatedEmailError',
        message: 'There is already an user with the given email',
    };
}
exports.DuplicatedEmailError = DuplicatedEmailError;
