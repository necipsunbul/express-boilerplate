import jwt, { Algorithm, SignOptions } from "jsonwebtoken";
import { IJWTpayload } from "../../interfaces/auth/jwtInerfaces";
import { vercelMs } from "../constants/vercelMsContants";
import Hashing from "../hashing/Hashing";

export default class JWTManager {
  private static instance: JWTManager;
  private constructor() {}
  public static get getInstance(): JWTManager {
    if (!JWTManager.instance) {
      JWTManager.instance = new JWTManager();
    }
    return JWTManager.instance;
  }

  private accessTokenExp: string = vercelMs.TWO_HOURS;
  private refreshTokenExp: string = vercelMs.SIX_MONTH;
  private algoritm: Algorithm = "HS384";

  accesToken(payload: IJWTpayload) {
    const options: SignOptions = {
      algorithm: this.algoritm,
      expiresIn: this.accessTokenExp,
    };
    return this._createToken(payload, options);
  }

  refreshToken(payload: IJWTpayload) {
    const options: SignOptions = {
      algorithm: this.algoritm,
      expiresIn: this.refreshTokenExp,
    };
    return this._createToken(payload, options);
  }

  private _createToken(payload: IJWTpayload, options?: SignOptions): string {
    if (
      ((!payload.mode || payload.mode === "web") &&
        !payload.clientBrowserInfo) ||
      (payload.mode === "mobile" && !payload.clientMobileId)
    ) {
      throw new Error("Bad Request");
    }
    const _payload = {
      userId: payload.userId,
      sessionHash: this._generateSessionHash(payload),
    };
    return jwt.sign(_payload, process.env.SECRET_KEY as string, options);
  }

  private _generateSessionHash(payload: IJWTpayload) {
    let hashData;
    if (payload.mode && payload.mode === "mobile") {
      hashData =
        payload.userId + process.env.STATIC_KEY + payload.clientMobileId;
    } else {
      hashData =
        payload.userId +
        process.env.STATIC_KEY +
        payload.clientIp +
        payload.clientBrowserInfo;
    }
    return Hashing.SHA256(hashData);
  }
}
