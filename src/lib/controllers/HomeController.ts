import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import SuccessResponse from "../_core/response/SuccessResponse";
import ApiDataModel from "../models/response/ApiDataModel";
import BaseResponse from "../_core/response/BaseResponse";

class HomeController {
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const apiData: ApiDataModel = new ApiDataModel("1.0", "Api is running");
      const response: BaseResponse = new SuccessResponse<ApiDataModel>(apiData);
      res.status(httpStatus.OK).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export default new HomeController();
