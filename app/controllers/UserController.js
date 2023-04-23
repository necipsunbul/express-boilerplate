const userService = require('../services/UserService');
const UserService = new userService();
const {SuccessResponse} = require('../../core/base/BaseResponse');
const ErrorManager = require('../../core/managers/ErrorManager');
const AuthTools = require('../utils/AuthTools');
const {UserDto, UserUpdateDto,UserCreateDto} = require('../dtos/UserDto');
const ErrorCodes = require('../../core/staticDatas/ErrorCodes');
class UserController{
    async create(req,res,next){
        try{
            const payload = new UserCreateDto(req.body,req.userData);
            payload.password = await AuthTools.generatePassword(req.body.password)
            const user = await UserService.saveToDb(payload);
            if(!user) return next(new ErrorManager('User not created',ErrorCodes.USER_NOT_CREATED));
            res.json(new SuccessResponse('ok',new UserDto(user)).toJson());
        }catch (e) {
            next(e);
        }
    }
    async detail(req,res,next){
        try{
            const id = req.params.id;
            const user = await UserService.findOne({_id:id});
            if(!user) return next(new ErrorManager('User not found',ErrorCodes.USER_DETAIL_NOT_FOUND));
            res.json(new SuccessResponse('ok',new UserDto(user)).toJson());
        }catch (e) {
            next(e);
        }
    }
    async list(req,res,next){
        try {
            const list  = await UserService.find().sort({_id:-1});
            res.json(new SuccessResponse('ok',list.map(item => new UserDto(item,true))));
        }catch (e) {
            next(e);
        }
    }
    async update(req,res,next){
        try {
            const id = req.params.id;
            if(req.body.password) req.body.password = await AuthTools.generatePassword(req.body.password);
            const process = await UserService.updateOne({_id:id},new UserUpdateDto(req.body,req.userData));
            if(!process)  return next(new ErrorManager('User not modified',ErrorCodes.USER_NOT_MODIFIED));
            res.json(new SuccessResponse());
        }catch (e) {
            next(e);
        }
    }
    async delete(req,res,next){
        try {
            const id = req.params.id;
            const process = await UserService.deleteOne({_id:id});
            if(!process)  return next(new ErrorManager('User not deleted',ErrorCodes.USER_NOT_DELETED));
            res.json(new SuccessResponse());
        }catch (e) {
            next(e);
        }
    }
    async initialData(req,res,next){
        try {
            res.json(new UserDto(req.userData));
        }catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();