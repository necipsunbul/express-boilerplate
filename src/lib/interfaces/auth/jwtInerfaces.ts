import { jwtMode } from "../../../types/applicationTypes";

export interface IJWTpayload {
  userId: string;
  mode?: jwtMode;
  clientMobileId?: string;
  clientBrowserInfo?: string;
  clientIp?: string;
}
