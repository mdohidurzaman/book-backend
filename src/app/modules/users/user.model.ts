import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

export const UserSchema = new Schema<IUser, UserModel>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Bookuser = model<IUser, UserModel>("Bookuser", UserSchema);
