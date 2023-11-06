import bcrypt from "bcrypt";
import crypto from "crypto-js";

export default class Hashing {
  static SHA256(payload: string) {
    return crypto.SHA256(payload).toString(crypto.enc.Hex);
  }

  static SHA1(payload: string) {
    return crypto.SHA1(payload).toString(crypto.enc.Hex);
  }

  static randomString(size: number = 16) {
    return crypto.lib.WordArray.random(size).toString();
  }

  static bcrypt(payload: string) {
    return bcrypt.hash(payload, 10);
  }

  static bcryptCompare(payload: string, hash: string) {
    return bcrypt.compare(payload, hash);
  }

  static encryptData(payload: string) {
    return crypto.AES.encrypt(
      payload,
      process.env.AES_SECRET_KEY as string
    ).toString();
  }

  static decryptData(ciphertext: string) {
    const bytes = crypto.AES.decrypt(
      ciphertext,
      process.env.AES_SECRET_KEY as string
    );
    return bytes.toString(crypto.enc.Utf8);
  }
}
