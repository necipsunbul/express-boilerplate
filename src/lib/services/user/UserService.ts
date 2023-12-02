import { Model } from "mongoose";
import BaseMongoService from "../../_core/services/BaseMongoService";
import UserSchema, { IUser } from "../../schemas/UserSchema";
import {
  UserCreateModel,
  UserDtoModel,
  UserUpdateModel,
} from "../../models/UserModel";
import LoginSuccessDataModel from "../../models/response/auth/LoginSuccessDataModel";
import ErrorManager from "../../_core/error/ErrorManager";
import AuthTools from "../../utils/auth/AuthTools";
import { userRole } from "../../_core/constants/appConstants";
import httpStatus from "http-status";
import UserRoleTools from "../../utils/auth/UserRolesTool";
import { IJWTpayload } from "../../interfaces/auth/jwtInerfaces";
import JWTManager from "../../_core/auth/JWTManager";
import { loginFunctionParams } from "../../interfaces/services/UserServiceInterfaces";

export default class UserService extends BaseMongoService<
  Model<IUser>,
  UserCreateModel,
  UserUpdateModel
> {
  constructor() {
    super(UserSchema);
  }

  createUser(body: UserCreateModel) {
    return this.save(body);
  }

  async login(
    body: loginFunctionParams
  ): Promise<LoginSuccessDataModel | ErrorManager> {
    const user = await this.findOne({ email: body.formData.email });

    if (
      !user ||
      !(await AuthTools.comparePassword(
        body.formData.password,
        user.password
      )) ||
      !UserRoleTools.checkPerm(userRole.SUPERADMIN, user.roles)
    )
      return new ErrorManager(
        "Username or email is incorrect",
        httpStatus.FORBIDDEN
      );

    const payload: IJWTpayload = {
      userId: user._id.toString(),
      mode: body.mode,
      clientBrowserInfo: body.userAgent,
      clientMobileId: body.clientMobileId,
    };

    const accessToken = JWTManager.getInstance.accesToken(payload);
    const refreshToken = JWTManager.getInstance.refreshToken(payload);
    const responseUser = new UserDtoModel(user);
    return new LoginSuccessDataModel(accessToken, refreshToken, responseUser);
  }
}
