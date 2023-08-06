import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { BookRoutes } from "../modules/book/book.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
