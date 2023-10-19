import { Model, UpdateQuery } from "mongoose";
import BaseService from "./BaseService";
import BaseModel from "../BaseModel";
export default class BaseMongoService<
  T extends Model<any>,
  C extends BaseModel,
  U extends BaseModel
> extends BaseService {
  constructor(private readonly model: T) {
    super();
  }
  save(data: C) {
    const willCreateData = new this.model(data);
    return willCreateData.save();
  }

  findAll(condition = {}) {
    return this.model.find(condition);
  }

  findOne(condition = {}) {
    return this.model.findOne(condition);
  }

  deleteOne(condition = {}) {
    return this.model.deleteOne(condition);
  }

  deleteMany(condition = {}) {
    return this.model.deleteMany(condition);
  }

  updateOne(condition = {}, data: UpdateQuery<U>) {
    return this.model.updateOne(condition, data);
  }

  findOneAndUpdate(condition = {}, data: UpdateQuery<U>) {
    return this.model.findOneAndUpdate(condition, data, { upsert: true });
  }

  updateMany(condition = {}, data: UpdateQuery<U>) {
    return this.model.updateMany(condition, data);
  }
}
