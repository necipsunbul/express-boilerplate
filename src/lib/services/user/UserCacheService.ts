import RedisManager from "../../_core/cache/RedisManager";

export default class UserCacheService extends RedisManager {
  key: string = "user";
  constructor() {
    super();
  }

  setData(field: string,data: string) {
    return this.hSet(this.key, field,data);
  }

  setExData(data: string) {
    return this.setEx(this.key, data, 10);
  }

  getData(field:string) {
    return this.hGet(this.key,field);
  }

  deleteData(field:string) {
    return this.hDel(this.key,field);
  }
}
