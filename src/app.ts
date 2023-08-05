import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app: Application = express();

// parser
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//All routes
// app.use("/api/v1", routes);

export default app;
