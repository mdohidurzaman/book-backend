import { Model, Types } from "mongoose";
import { IBook } from "../book/book.interface";

export type IComment = {
  desc: string;
  book?: Types.ObjectId | IBook;
};

export type BookModel = Model<IComment>;
