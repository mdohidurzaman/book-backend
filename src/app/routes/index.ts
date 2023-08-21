import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { BookRoutes } from "../modules/book/book.route";
import { CommentRoutes } from "../modules/comment/comment.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
