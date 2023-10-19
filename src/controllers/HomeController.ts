import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import SuccessResponse from "../libs/core/response/SuccessResponse";
import ApiMessageModel from "../models/ApiMessageModel";

class HomeController {
  async index(req: Request, res: Response, next: NextFunction) {
    const apiMessage: ApiMessageModel = new ApiMessageModel(
      "1.0",
      "Api is running"
    );
    res
      .status(httpStatus.OK)
      .json(new SuccessResponse<ApiMessageModel>("ok", apiMessage));
  }
}

export default new HomeController();
