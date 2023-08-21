import { IComment } from "./comment.interface";
import { Comment } from "./comment.model";

const createComment = async (comment: IComment): Promise<IComment | null> => {
  const result = await Comment.create(comment);
  return result;
};

const getAllComments = async (): Promise<IComment[] | null> => {
  const result = await Comment.find();
  return result;
};

// const getSingleBook = async (id: string): Promise<IBook | null> => {
//   const result = await Book.findById(id);
//   return result;
// };

// const updateBook = async (
//   id: string,
//   payload: Partial<IBook>
// ): Promise<IBook | null> => {
//   const result = await Book.findOneAndUpdate({ _id: id }, payload, {
//     new: true,
//   });
//   return result;
// };

// const deleteBook = async (id: string): Promise<IBook | null> => {
//   const result = await Book.findByIdAndDelete(id);
//   return result;
// };

export const CommentService = {
  createComment,
  getAllComments,
  // getSingleBook,
  // updateBook,
  // deleteBook,
};
