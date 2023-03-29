
class UserDto{
    constructor(user) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.roles = user.roles;
    }
}

class UserUpdateDto{
    constructor(user) {
        this._id = user._id;
        this.name = user.name;
        this.email = user.email;
        this.gender = user.gender;
        this.roles = user.roles;
        if(user.password) this.password = user.password;
    }
}

module.exports ={
    UserDto,
    UserUpdateDto
}