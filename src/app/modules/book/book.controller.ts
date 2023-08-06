import { Request, Response } from "express";
import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { BookService } from "./book.service";
import catchasyne from "../../../shared/catchasyne";
import { IBook } from "./book.interface";

const createBook = catchasyne(async (req: Request, res: Response) => {
  const { ...book } = req.body;
  const result = await BookService.createBook(book);
  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is created successfully!",
    data: result,
  });
});

const getAllBooks = catchasyne(async (req: Request, res: Response) => {
  const result = await BookService.getAllBooks();

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All books are retrived.",
    data: result,
  });
});

const getSingleBook = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.getSingleBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "A book is retrived.",
    data: result,
  });
});

const updateBook = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;
  const result = await BookService.updateBook(id, updatedData);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is successfully updated.",
    data: result,
  });
});

const deleteBook = catchasyne(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await BookService.deleteBook(id);

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book is successfully deleted.",
    data: result,
  });
});

export const BookController = {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
