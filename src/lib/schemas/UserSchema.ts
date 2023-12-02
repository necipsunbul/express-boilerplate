import { Schema, model, Document } from "mongoose";
import AuditModel from "../models/AuditModel";
import AuditSchema from "./AuditSchema";
import ErrorManager from "../_core/error/ErrorManager";
import httpStatus from "http-status";

export interface IUser extends Document {
  name: String;
  surName?: String;
  cover?: String;
  userName: String;
  email: String;
  password: String;
  birthDay: Date;
  gender: Number;
  roles: Array<number>;
  isDeleted: Boolean;
  isBanned: Boolean;
  audit?: AuditModel;
}

const userSchema: Schema<IUser> = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    surName: String,
    cover: String,
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    roles: {
      type: [Number],
      required: true,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    audit: AuditSchema,
  },
  {
    versionKey: false,
  }
);
userSchema.post("save", { errorHandler: true }, (error: any, doc, next) => {
  if (error.name === "MongoServerError" && error.code === 11000) {
    const error_ = new ErrorManager(
      "Email address is used by another user",
      httpStatus.BAD_REQUEST,
      error.code
    );
    next(error_);
  } else {
    next(error);
  }
});
export default model<IUser>("user", userSchema);
