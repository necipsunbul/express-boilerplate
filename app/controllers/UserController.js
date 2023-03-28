const userService = require('../services/UserService');
const UserService = new userService();
const {SuccessResponse} = require('../../core/base/BaseResponse');
const ErrorManager = require('../../core/managers/ErrorManager');
const AuthTools = require('../utils/AuthTools');
const {UserDto} = require('../dtos/UserDto');
class UserController{
    async create(req,res,next){
        try{
            const payload = {...req.body};
            payload.password = await AuthTools.generatePassword(req.body.password)
            const user = await UserService.saveToDb(payload);
            if(!user){
                return next(new ErrorManager('User not created'))
            }
            res.json(new SuccessResponse('ok',new UserDto(user)).toJson());
        }catch (e) {
            next(e);
        }
    }

    async get(req,res,next){

    }

    async list(req,res,next){
        try {
            const list  = await UserService.find();
            res.json(new SuccessResponse('ok',list.map(item => new UserDto(item))));
        }catch (e) {
            next(e);
        }
    }

    async update(req,res,next){

    }

    async delete(req,res,next){

    }
}

module.exports = new UserController();