import { userRole } from "../../_core/constants/appConstants";

export default class UserRoleTools {
  static checkPerm(need: userRole, roles: userRole[]) {
    return roles.includes(need);
  }
  static checkMultiplePerm(need: userRole[], roles: userRole[]) {
    for (let role of need) {
      if (!roles.includes(role)) return false;
    }
    return true;
  }
}
