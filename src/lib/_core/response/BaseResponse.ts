export default class BaseResponse {
  protected message: string;
  protected success?: boolean;
  constructor(message: string) {
    this.message = message;
  }

  toJson() {
    return {
      ...this,
    };
  }

  setMessage(message: string) {
    this.message = message;
  }
}
