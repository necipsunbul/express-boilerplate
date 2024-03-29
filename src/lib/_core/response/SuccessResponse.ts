import BaseResponse from "./BaseResponse";
export default class SuccessResponse<T> extends BaseResponse {
  body?: T | null;
  constructor(data?: T) {
    super("ok");
    this.success = true;
    this.body = data;
  }
}
