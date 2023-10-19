import mongoose from "mongoose";
const mongoConfig = () => {
    try {
        const {MONGO_PORT,MONGO_USERNAME,MONGO_PASSWORD,MONGO_HOST,MONGO_DATABASE} = process.env;
        const uri: string = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
        mongoose.connect(uri);
        mongoose.connection.on('error', error => console.log('Error in Mongodb Connection:',error));
        mongoose.connection.on('connected', () => console.log('Mongodb Connection success'));
        mongoose.connection.on('disconnected',() => console.log('Mongodb Disconnected'));
        mongoose.Promise = global.Promise;
      } catch {
        throw new Error("Database Exception Failed");
      }
}

export default mongoConfig;