import { Request, Response, NextFunction } from "express";
import SuccessResponse from "../../_core/response/SuccessResponse";
import LoginFormModel from "../../models/response/auth/LoginFormModel";
import UserService from "../../services/user/UserService";
import ErrorManager from "../../_core/error/ErrorManager";
import LoginSuccessDataModel from "../../models/response/auth/LoginSuccessDataModel";

const userService = new UserService();

class AuthController {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const formData: LoginFormModel = new LoginFormModel(req.body);

      const result = await userService.login({
        formData: formData,
        mode: "web",
        clientMobileId: "",
        userAgent: req.get("User-Agent"),
      });

      if (result instanceof ErrorManager) return next(result);
      res.json(new SuccessResponse<LoginSuccessDataModel>(result));
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
