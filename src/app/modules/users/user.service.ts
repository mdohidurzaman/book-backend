import { IUser } from "./user.interface";
import { Bookuser } from "./user.model";

const createUser = async (bookuser: IUser): Promise<IUser | null> => {
  const result = await Bookuser.create(bookuser);
  return result;
};

const getAllUsers = async (): Promise<IUser[] | null> => {
  const result = await Bookuser.find();
  return result;
};

const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await Bookuser.findById(id);
  return result;
};

const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const result = await Bookuser.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | null> => {
  const result = await Bookuser.findByIdAndDelete(id);
  return result;
};

export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
