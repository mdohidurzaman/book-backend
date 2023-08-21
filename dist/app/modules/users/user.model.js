"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookuser = exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});
exports.Bookuser = (0, mongoose_1.model)("Bookuser", exports.UserSchema);
