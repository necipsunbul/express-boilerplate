import { Model } from "mongoose";
import BaseMongoService from "../libs/core/services/BaseMongoService";
import UserSchema, { IUser } from "../schemas/UserSchema";
import { UserCreateModel, UserUpdateModel } from "../models/UserModel";

export default class UserService extends BaseMongoService<
  Model<IUser>,
  UserCreateModel,
  UserUpdateModel
> {
  constructor() {
    super(UserSchema);
  }

  async createUser(body: UserCreateModel) {
    await body.hashPassword();
    return await this.save(body);
  }
}
