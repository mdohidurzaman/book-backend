import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchasyne from "../../../shared/catchasyne";
import { IComment } from "./comment.interface";
import { CommentService } from "./comment.service";

const createComment = catchasyne(async (req: Request, res: Response) => {
  const { ...comment } = req.body;

  const result = await CommentService.createComment(comment);
  sendResponse<IComment>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is created successfully!",
    data: result,
  });
});

const getAllComments = catchasyne(async (req: Request, res: Response) => {
  const result = await CommentService.getAllComments();

  sendResponse<IComment[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All books are retrived.",
    data: result,
  });
});

// const getSingleBook = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await BookService.getSingleBook(id);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "A book is retrived.",
//     data: result,
//   });
// });

// const updateBook = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   const result = await BookService.updateBook(id, updatedData);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book is successfully updated.",
//     data: result,
//   });
// });

// const deleteBook = catchasyne(async (req: Request, res: Response) => {
//   const id = req.params.id;
//   const result = await BookService.deleteBook(id);

//   sendResponse<IBook>(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Book is successfully deleted.",
//     data: result,
//   });
// });

export const CommentController = {
  createComment,
  getAllComments,
  // getSingleBook,
  // updateBook,
  // deleteBook,
};
