const {ErrorResponse} = require('../../core/base/BaseResponse');
const ErrorCodes = require('../../core/staticDatas/ErrorCodes');
const {UserRoles}  = require('../../core/staticDatas/systemStatics');
const AuthTools = require('../utils/AuthTools');
const userService = require('../services/UserService');
const {UserDto} = require("../dtos/UserDto");
module.exports = (userRole = UserRoles.user) => {
    return async (req,res,next) => {
        const Resp = new ErrorResponse('Authentication Failed');
        Resp.errorCode = ErrorCodes.AUTH_FAILED;
        try {
            const token = req.headers['x-access-token'] || null;
            if(!token) return res.json(Resp);
            const decoded = await AuthTools.verifyToken(token);
            if(!decoded) return res.json(Resp);
            const UserService = new userService();
            const user = await UserService.findOne({_id:decoded.userId});
            if(!user) return res.json(Resp);
            if(!AuthTools.compareSessionKey(user,decoded.sessionKey)) return res.json(Resp);
            if(!AuthTools.checkPerm(userRole,user.roles)) return res.json(Resp);
            req.userData = new UserDto(user.toObject());
            next();
        }catch {
            return res.json(Resp);
        }
    }
}