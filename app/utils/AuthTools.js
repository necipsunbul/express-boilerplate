const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {STATIC_KEY,SECRET_KEY} = process.env;

class AuthTools{
    static generatePassword(string){
        return bcrypt.hash(string,10);
    }
    static comparePassword(string,hash){
        return bcrypt.compare(string,hash);
    }
    static generateToken(user,options = {}){
        try{
            if(!user || !user.password || !user._id) return false;
            const payload = {
                userId: user._id.toString(),
                sessionKey: user._id.toString() + STATIC_KEY + user.password.toString(),
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
        return current.includes(need);
    }

}

module.exports = AuthTools;