const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SHA256 = require('crypto-js/sha256');
const {UserRoles} = require("../../core/staticDatas/systemStatics");
const {STATIC_KEY,SECRET_KEY} = process.env;

class AuthTools{
    static generatePassword(string){
        return bcrypt.hash(string,10);
    }
    static comparePassword(string,hash){
        return bcrypt.compare(string,hash);
    }

    static generateSessionKey(user){
        if(!user || !user.password || !user._id) return false;
        return SHA256(user._id.toString() + STATIC_KEY + user.password.toString()).toString()
    }

    static compareSessionKey(current,hash){
        const createdKey = AuthTools.generateSessionKey(current);
        if(!createdKey) return false;
        return createdKey === hash;
    }

    static generateToken(user,options = {}){
        try{
            const createdKey = AuthTools.generateSessionKey(user);
            if(!createdKey) return false;
            const payload = {
                userId: user._id.toString(),
                sessionKey: createdKey,
            };
            return jwt.sign(payload,SECRET_KEY,options);
        }catch {
            return false;
        }
    }
    static verifyToken(token){
        return jwt.verify(token,SECRET_KEY);
    }

    static checkPerm(need,current = []){
         if(current.includes(UserRoles.superAdmin)) return true;
         return current.includes(need);
    }

}

module.exports = AuthTools;