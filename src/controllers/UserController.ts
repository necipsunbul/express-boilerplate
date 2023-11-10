import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import SuccessResponse from "../libs/core/response/SuccessResponse";
import UserService from "../services/UserService";
import ErrorManager from "../libs/managers/ErrorManager";
import { UserCreateModel, UserViewModel } from "../models/UserModel";
const userService = new UserService();
class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = new UserCreateModel(req.body);
      const result = await userService.createUser(user);
      if (!result)
        next(new ErrorManager("Bad Request", httpStatus.BAD_REQUEST));
      const userData = new UserViewModel(result);
      const response = new SuccessResponse<UserViewModel>(userData);
      res.status(httpStatus.OK).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
