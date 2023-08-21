"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const comment_controller_1 = require("./comment.controller");
const router = express_1.default.Router();
router.post("/id", comment_controller_1.CommentController.createComment);
// router.patch("/:id", BookController.updateBook);
router.get("/", comment_controller_1.CommentController.getAllComments);
// router.get("/:id", BookController.getSingleBook);
// router.delete("/:id", BookController.deleteBook);
exports.CommentRoutes = router;
