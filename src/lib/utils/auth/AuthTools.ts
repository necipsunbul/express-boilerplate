import Hashing from "../../_core/hashing/Hashing";

export default class AuthTools {
  static createPassword(payload: string): Promise<string> {
    return Hashing.bcryptHash(payload);
  }

  static comparePassword(password: string, hash: string) {
    return Hashing.bcryptCompare(password, hash);
  }
}
