
class UserDto{
    constructor(user,createdAt = false) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.roles = user.roles;
        if(createdAt) this.createdAt = user.createdAt;
    }
}


class UserCreateDto{
    constructor(user,auditUser) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.roles = user.roles;
        this.password = user.password;
        this.createdAt = {
            by:auditUser._id,
            day:Date.now()
        };
    }
}

class UserUpdateDto{
    constructor(user,auditUser) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.roles = user.roles;
        if(user.password) this.password = user.password;
        this.updatedAt = {
            by:auditUser._id,
            day:Date.now()
        };
    }
}

module.exports ={
    UserDto,
    UserCreateDto,
    UserUpdateDto
}