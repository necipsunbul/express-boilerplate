
import AuditModel from "./AuditModel";

export class UserModel {
  name: string;
  surName: string;
  email: string;
  userName?: string;
  password?: string;
  audit?: AuditModel;
  roles?: number[];
  constructor(
    name: string,
    surName: string,
    email: string,
    userName?: string,
    password?: string,
    audit?: AuditModel,
    roles?: number[]
  ) {
    this.name = name;
    this.surName = surName;
    this.email = email;
    this.userName = userName;
    this.password = password;
    this.audit = audit;
    this.roles = roles;
  }
}

export class UserCreateModel{}
export class UserUpdateModel{}