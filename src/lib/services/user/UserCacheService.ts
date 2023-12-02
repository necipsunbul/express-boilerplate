import RedisManager from "../../_core/cache/RedisManager";

export default class UserCacheService extends RedisManager {
  key: string = "user";
  constructor() {
    super();
  }

  setData(data: string) {
    return this.set(this.key, data);
  }

  setExData(data: string) {
    return this.setEx(this.key, data, 10);
  }
  getData() {
    return this.get(this.key);
  }

  deleteData() {
    return this.del(this.key);
  }
}
