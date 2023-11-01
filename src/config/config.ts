import dotenvConfig from "./dotenv.config";
import mongoConfig from "./mongo.config";
import redisBuild from "./redis.config";
const appConfigs = () => {
  dotenvConfig();
  redisBuild();
  mongoConfig();
};

export default appConfigs;
