import express from "express";
import { CommentController } from "./comment.controller";
const router = express.Router();

router.post("/id", CommentController.createComment);
// router.patch("/:id", BookController.updateBook);
router.get("/", CommentController.getAllComments);
// router.get("/:id", BookController.getSingleBook);
// router.delete("/:id", BookController.deleteBook);

export const CommentRoutes = router;
