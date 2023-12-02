import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import SuccessResponse from "../_core/response/SuccessResponse";
import UserService from "../services/user/UserService";
import ErrorManager from "../_core/error/ErrorManager";
import { UserCreateModel, UserDtoModel } from "../models/UserModel";
import AuthTools from "../utils/auth/AuthTools";
const userService = new UserService();
class UserController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const user = new UserCreateModel({
        ...req.body,
        password: await AuthTools.createPassword(req.body.password),
      });
      const result = await userService.createUser(user);
      if (!result)
        next(new ErrorManager("Bad Request", httpStatus.BAD_REQUEST));
      const userData = new UserDtoModel(result);
      const response = new SuccessResponse<UserDtoModel>(userData);
      res.status(httpStatus.OK).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController();
