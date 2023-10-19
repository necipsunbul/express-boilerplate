export default class BaseResponse {
  message: string;
  success?: boolean;
  constructor(message: string) {
    this.message = message;
  }

  toJson() {
    return {
      ...this,
    };
  }
}
