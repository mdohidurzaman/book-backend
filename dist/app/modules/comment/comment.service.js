"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_model_1 = require("./comment.model");
const createComment = (comment) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.Comment.create(comment);
    return result;
});
const getAllComments = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield comment_model_1.Comment.find();
    return result;
});
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
exports.CommentService = {
    createComment,
    getAllComments,
    // getSingleBook,
    // updateBook,
    // deleteBook,
};
