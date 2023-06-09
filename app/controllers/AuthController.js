const {SuccessResponse} = require('../../core/base/BaseResponse');
const errorManager = require('../../core/managers/ErrorManager');
const userService = require('../services/UserService');
const UserService = new userService();
const AuthTool = require('../utils/AuthTools');
const ErrorCodes = require('../../core/staticDatas/ErrorCodes');
const {UserDto} = require("../dtos/UserDto");
const {UserRoles} = require("../../core/staticDatas/systemStatics");

class AuthController{
    async login(req,res,next){
        try {
            const {email,password} = req.body;
            const user = await UserService.findOne({email});
            const error = new errorManager('Login Failed',ErrorCodes.LOGIN_FAILED);
            //error.responseCode = httpStatus.UNAUTHORIZED;
            if(!user) return next(error);
            if(!(await AuthTool.comparePassword(password,user.password))) return next(error);
            if(!AuthTool.checkPerm(UserRoles.superAdmin,user.roles)) return next(error);
            const data = {
                user: new UserDto(user),
                accessToken:  AuthTool.generateToken(user)
            };
            res.json(new SuccessResponse('ok',data));
        }catch (e) {
            next(e);
        }
    }
}

module.exports = new AuthController();