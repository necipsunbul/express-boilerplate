import dotenvConfig from "./dotenv.config";
import mongoConfig from "./mongo.config";
import redisBuild from "./redis.config";
const appConfigs = async () => {
  dotenvConfig();
  redisBuild();
  await mongoConfig();
};

export default appConfigs;
