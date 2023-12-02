import { UserDtoModel } from "../../UserModel";

export default class LoginSuccessDataModel {
  accessToken: string;
  refreshToken: string;
  user: UserDtoModel;
  constructor(accessToken: string, refreshToken: string, user: UserDtoModel) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.user = user;
  }
}
