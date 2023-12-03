import jwt, { SignOptions, Algorithm } from "jsonwebtoken";
import { vercelMs } from "../constants/appConstants";

export class JWTManager {
  private static instance: JWTManager;
  private constructor() {}
  public static get getInstance(): JWTManager {
    if (!JWTManager.instance) JWTManager.instance = new JWTManager();
    return JWTManager.instance;
  }

  private algorithm: Algorithm = "HS384";

  async sign(payload: string, secretKey: string, expireTime?: vercelMs) {
    try {
      const options: SignOptions = {
        expiresIn: expireTime,
        algorithm: this.algorithm,
      };
      return jwt.sign(payload, secretKey, options);
    } catch (e) {
      throw new Error("JWT sign error");
    }
  }

  verify(token: string, secretKey: string) {
    return jwt.verify(token, secretKey);
  }
}
