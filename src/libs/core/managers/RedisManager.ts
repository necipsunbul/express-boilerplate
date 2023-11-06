import { RedisClientType } from "redis";
import { redisClient, isReady } from "../../../config/redis.config";

export default class RedisManager {
  protected client?: RedisClientType;
  constructor() {
    if (isReady) this.client = redisClient;
  }

  protected get(key: string) {
    return this.client?.get(key);
  }

  protected set(key: string, value: string) {
    return this.client?.set(key, value);
  }

  protected setEx(key: string, value: string, seconds: number) {
    return this.client?.setEx(key, seconds, value);
  }

  protected del(key: string) {
    return this.client?.del(key);
  }

  protected hSet(key: string, field: string, value: string) {
    return this.client?.hSet(key, field, value);
  }

  protected hDel(key: string, field: string) {
    return this.client?.hDel(key, field);
  }

  protected flush() {
    return this.client?.flushAll();
  }
}
