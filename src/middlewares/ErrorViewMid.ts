import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../libs/core/response/ErrorResponse";
import ErrorManager from "../libs/managers/ErrorManager";

export function error404(req: Request, res: Response, next: NextFunction) {
  const error = new ErrorManager("404 not found");
  error.httpStatus = 404;
  next(error);
}

export function viewError(
  error: ErrorManager,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.httpStatus) res.status(error.httpStatus);
  const Response = new ErrorResponse(error.message);
  if (error.errorCode) Response.errorCode = error.errorCode;
  res.json(Response);
}
