import mongoose from "mongoose";
const mongoConfig = () => {
  const {
    MONGO_PORT,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOST,
    MONGO_DATABASE,
  } = process.env;
  const uri: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection failed");
    });

  mongoose.Promise = global.Promise;
};

export default mongoConfig;
