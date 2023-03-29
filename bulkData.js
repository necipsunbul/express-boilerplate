require('dotenv').config();
const mongodb = require('./core/config/mongodb');
const dbConnection = mongodb();
const AuthTools = require('./app/utils/AuthTools');
const UserModel = require('./app/models/UserModel');
setTimeout(async () => {
    const userData = {
        name:'Super User',
        email:'user@gmail.com',
        password: await AuthTools.generatePassword('123456'),
        gender:1,
        roles:[1,2,3]
    }

    const user  = new UserModel(userData);
    const process = await user.save();
    if(!process){
        console.log('User not created');
        return;
    }
    console.log('User Created');
    dbConnection.close();
},2000);
