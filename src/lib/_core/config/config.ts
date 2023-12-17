import dotenvConfig from "./dotenv.config";
import { connectMongoDb, closeMongdb } from "./mongo.config";
import { redisConnect, redisDisconnect } from "./redis.config";
export const appConfigs = async () => {
  dotenvConfig();
  await redisConnect();
  await connectMongoDb();
};

export const closeDatabases = async () => {
  await closeMongdb();
  await redisDisconnect();
};
