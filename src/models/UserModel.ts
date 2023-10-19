import BaseModel from "../libs/core/BaseModel";
import AuditModel from "./AuditModel";
export class UserModel {
  name: String;
  surName: String;
  email: String;
  userName?: String;
  password?: String;
  audit?: AuditModel;
  roles?: Number[];
  groups?: Number[];
  constructor(
    name: String,
    surName: string,
    email: String,
    userName?: String,
    password?: String,
    audit?: AuditModel
  ) {
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.audit = audit;
  }
}
export class UserCreateModel extends BaseModel {
  name: string;
  email: string;
  password: string;
  constructor(name: string, email: string, password: string) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
export class UserUpdateModel extends BaseModel {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    super();
    this.name = name;
    this.email = email;
  }
}
