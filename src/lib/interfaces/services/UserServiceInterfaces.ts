import { jwtMode } from "../../../types/applicationTypes";
import LoginFormModel from "../../models/response/auth/LoginFormModel";

export interface loginFunctionParams {
  formData: LoginFormModel;
  mode?: jwtMode;
  userAgent?: string;
  clientMobileId?: string;
}
