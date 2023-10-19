import BaseResponse from "./BaseResponse";
export default class SuccessResponse<T> extends BaseResponse {
  data?: T | null;
  constructor(message = "ok", data?: T) {
    super(message || "ok");
    this.success = true;
    if (data) this.data = data;
  }
}
