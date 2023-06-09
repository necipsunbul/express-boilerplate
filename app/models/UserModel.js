const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ErrorManager = require('../../core/managers/ErrorManager');
const userSchema = new schema({
    name:String,
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required: [true,'Password is required']
    },
    cover:String,
    gender:Number,
    roles:[Number],
    deleted:{
        type:Boolean,
        default:false
    },
    createdAt: {
        by:schema.Types.ObjectId,
        day:Date
    },
    updatedAt: {
        by:schema.Types.ObjectId,
        day:Date
    }
},{versionKey:false});

userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        const error_ = new ErrorManager('Email must be unique');
        error_.errorCode = 11000;
        next(error_);
    } else {
        next(error);
    }
});
module.exports = mongoose.model('user',userSchema);