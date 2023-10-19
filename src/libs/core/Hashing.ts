import bcrypt from "bcrypt";
import crypto from "crypto-js";

export default class Hashing {
  static SHA256(payload: string) {
    return crypto.SHA256(payload).toString();
  }

  static SHA1(payload: string) {
    return crypto.SHA1(payload).toString();
  }

  static randomString(size: number = 16) {
    return crypto.lib.WordArray.random(size).toString();
  }

  static async bcrypt(payload: string) {
    return await bcrypt.hash(payload, 10);
  }

  static async bcryptCompare(payload: string, hash: string) {
    return await bcrypt.compare(payload, hash);
  }
}
