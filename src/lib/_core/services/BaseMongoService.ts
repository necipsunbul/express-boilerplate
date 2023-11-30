import { Model, UpdateQuery } from "mongoose";
import BaseService from "./BaseService";
import BaseModel from "../model/BaseModel";
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

  async deleteOne(condition = {}) {
    const result = await this.model.deleteOne(condition);
    return result.deletedCount;
  }

  deleteMany(condition = {}) {
    return this.model.deleteMany(condition);
  }

  async updateOne(condition = {}, data: UpdateQuery<U>) {
    const result = await this.model.updateOne(condition, data);
    return result.modifiedCount;
  }

  findOneAndUpdate(condition = {}, data: UpdateQuery<U>) {
    return this.model.findOneAndUpdate(condition, data, { upsert: true });
  }

  updateMany(condition = {}, data: UpdateQuery<U>) {
    return this.model.updateMany(condition, data);
  }
}
