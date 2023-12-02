import BaseModel from "../_core/model/BaseModel";
import AuditModel from "./AuditModel";
import { ICreateUserBody, IUserViewBody } from "../interfaces/UserInterfaces";

export class UserDtoModel {
  _id: string;
  name: string;
  cover?: string;
  surName?: string;
  userName: string;
  email: string;
  gender: number;
  roles: Array<number>;
  birthDay: Date;
  audit?: AuditModel;
  constructor(body: IUserViewBody) {
    this._id = body._id.toString();
    this.name = body.name;
    this.surName = body.surName;
    this.cover = body.cover;
    this.email = body.email;
    this.gender = body.gender;
    this.birthDay = body.birthDay;
    this.roles = body.roles;
    this.userName = body.userName;
  }
}

export class UserModel {
  name: string;
  surName: string;
  email: string;
  userName?: string;
  password?: string;
  audit?: AuditModel;
  roles?: Number[];
  constructor(
    name: string,
    surName: string,
    email: string,
    userName?: string,
    password?: string,
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
  surName?: string;
  userName: string;
  email: string;
  password: string;
  gender: number;
  roles: Array<number>;
  birthDay: Date;
  audit: AuditModel;
  constructor(body: ICreateUserBody) {
    super();
    this.name = body.name;
    this.email = body.email;
    this.password = body.password;
    this.gender = body.gender;
    this.roles = body.roles;
    this.birthDay = body.birthDay;
    this.userName = body.userName;
    this.audit = new AuditModel(new Date());
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
