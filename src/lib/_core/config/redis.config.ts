import { RedisClientType } from "redis";
import RedisDriver from "../cache/RedisDriver";
export let redisClient: RedisClientType;
export let isReady: boolean;

const redisBuild = async () => {
  const redis = new RedisDriver();
  redisClient = await redis.connect();
  isReady = redis.isReady;
};

export default redisBuild;
