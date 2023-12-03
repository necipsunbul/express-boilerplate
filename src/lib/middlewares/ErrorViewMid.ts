import { Request, Response, NextFunction } from "express";
import ErrorResponse from "../_core/response/ErrorResponse";
import ErrorService from "../_core/error/ErrorService";

export function error404(req: Request, res: Response, next: NextFunction) {
  const error = new ErrorService("404 not found");
  error.httpStatus = 404;
  next(error);
}

export function viewError(
  error: ErrorService,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error.httpStatus) res.status(error.httpStatus);
  const Response = new ErrorResponse(error.message);
  if (error.errorCode) Response.errorCode = error.errorCode;
  res.json(Response);
}
