import mongoose from "mongoose";
const mongoConfig = async () => {
  const {
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE,
  } = process.env;
  const uri: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
  try {
    await mongoose.connect(uri);
    console.log("Mongodb Connection success");
  } catch (e) {
    throw e;
  }

  mongoose.Promise = global.Promise;
};

export default mongoConfig;
