export default class LoginFormModel {
  email: string;
  password: string;
  constructor(body: { email: string; password: string }) {
    this.email = body.email;
    this.password = body.password;
  }
}
