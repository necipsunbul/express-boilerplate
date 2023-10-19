import BaseResponse from "./BaseResponse";
export default class ErrorResponse extends BaseResponse {
  errorCode?: number;
  httpStatus?: number;
  constructor(message: string, httpStatus?: number) {
    super(message);
    this.success = false;
    this.httpStatus = httpStatus;
  }
}
