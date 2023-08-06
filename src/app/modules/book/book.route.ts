import express from "express";
import { BookController } from "./book.controller";
const router = express.Router();

router.post("/create", BookController.createBook);
router.patch("/:id", BookController.updateBook);
router.get("/", BookController.getAllBooks);
router.get("/:id", BookController.getSingleBook);
router.delete("/:id", BookController.deleteBook);

export const BookRoutes = router;
