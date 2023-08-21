import { Schema, model } from "mongoose";
import { BookModel, IComment } from "./comment.interface";

export const CommentSchema = new Schema<IComment, BookModel>(
  {
    desc: {
      type: String,
      required: true,
    },

    book: {
      type: Schema.Types.ObjectId,
      ref: "Book",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Comment = model<IComment, BookModel>("Comment", CommentSchema);
