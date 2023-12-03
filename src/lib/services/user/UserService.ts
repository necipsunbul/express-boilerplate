import { Model } from "mongoose";
import BaseMongoService from "../../_core/services/BaseMongoService";
import UserSchema, { IUser } from "../../schemas/UserSchema";
import { UserCreateModel,UserUpdateModel} from "../../models/UserModel";

export default class UserService extends BaseMongoService<
  Model<IUser>,
  UserCreateModel,
  UserUpdateModel
> {
  constructor() {
    super(UserSchema);
  }
}
