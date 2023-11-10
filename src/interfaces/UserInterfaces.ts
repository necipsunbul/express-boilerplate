import AuditModel from "../models/AuditModel";
export interface ICreateUserBody {
  name: string;
  surName?: string;
  email: string;
  gender: number;
  roles: Array<number>;
  birthDay: Date;
  password: string;
}
export interface IUserViewBody {
  _id: string;
  name: string;
  surName?: string;
  email: string;
  gender: number;
  roles: Array<number>;
  birthDay: Date;
  audit?: AuditModel;
}
