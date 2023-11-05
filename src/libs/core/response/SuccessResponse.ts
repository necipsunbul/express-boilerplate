import BaseResponse from "./BaseResponse";
export default class SuccessResponse<T> extends BaseResponse {
  data?: T | null;
  constructor(data?: T) {
    super("ok");
    this.success = true;
    if (data) this.data = data;
  }
}
