const {SuccessResponse} = require('../../core/base/BaseResponse');

class HomeController{
    index(req,res,next){
        res.json(new SuccessResponse('Api is Running',{version:'1.0'}).toJson());
    }
}

module.exports = new HomeController();