import { RedisClientType, createClient } from "redis";

export default class RedisDriver {
  private static instance: RedisDriver;
  public static get getInstance(): RedisDriver {
    if (!RedisDriver.instance) RedisDriver.instance = new RedisDriver();
    return RedisDriver.instance;
  }

  client: RedisClientType;
  isReady: boolean = false;
  private constructor() {
    const { REDIS_PORT, REDIS_USERNAME, REDIS_PASSWORD, REDIS_SERVER } =
      process.env;
    const clientOptions = {
      url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_SERVER}:${REDIS_PORT}`,
    };
    this.client = createClient();
  }
  public async connect(): Promise<RedisClientType> {
    try {
      this.client.on("error", (err) => console.log(`Redis Error: ${err}`));
      this.client.on("connect", () => console.log("Redis connected"));
      this.client.on("reconnecting", () => console.log("Redis reconnecting"));
      this.client.on("ready", () => {
        this.isReady = true;
        console.log("Redis ready!");
      });
      return await this.client.connect();
    } catch (e) {
      console.log(e);
      throw new Error("Redis Connection Error");
    }
  }
}
