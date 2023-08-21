"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.CommentSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CommentSchema = new mongoose_1.Schema({
    desc: {
        type: String,
        required: true,
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Book",
        required: true,
    },
}, {
    timestamps: true,
});
exports.Comment = (0, mongoose_1.model)("Comment", exports.CommentSchema);
