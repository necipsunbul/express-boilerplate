import dotenvConfig from "./dotenv.config";
import mongoConfig from "./mongo.config";

const appConfigs = () => {
  dotenvConfig();
  // mongoConfig();
};

export default appConfigs;
