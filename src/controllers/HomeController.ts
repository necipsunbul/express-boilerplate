import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import SuccessResponse from "../libs/core/response/SuccessResponse";
import ApiDataModel from "../models/responseData/ApiDataModel";
class HomeController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const apiData: ApiDataModel = new ApiDataModel("1.0", "Api is running");
      res
        .status(httpStatus.OK)
        .json(new SuccessResponse<ApiDataModel>("ok", apiData));
    } catch (e) {
      next(e);
    }
  }
}

export default new HomeController();
