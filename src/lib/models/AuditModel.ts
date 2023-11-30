export default class AuditModel {
  createdAt: Date;
  createdBy?: String;
  updatedAt?: Date;
  updatedBy?: String;
  constructor(
    createdAt: Date,
    createdBy?: String,
    updatedAt?: Date,
    updatedBy?: String
  ) {
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;
    this.updatedBy = updatedBy;
  }
}
