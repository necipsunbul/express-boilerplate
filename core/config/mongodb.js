module.exports = () => {
    const mongoose = require('mongoose');
    const {MONGO_PORT,MONGO_USERNAME,MONGO_PASSWORD,MONGO_HOST,MONGO_DATABASE} = process.env;
    const connectionString = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`;
    mongoose.connect(connectionString);
    mongoose.connection.on('error', error => console.log('Error in Mongodb Connection:',error));
    mongoose.connection.on('connected', () => console.log('Mongodb Connection success'));
    mongoose.connection.on('disconnected',() => console.log('Mongodb Disconnected'));
    mongoose.Promise = global.Promise;
}