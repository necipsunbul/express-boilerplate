const ErrorManager = require('../../core/managers/ErrorManager');
const {ErrorResponse} = require('../../core/base/BaseResponse');
function error404(req, res, next){
    const error = new ErrorManager("404 not found");
    error.responseCode = 404;
    next(error);
}

function viewError(error,req, res, next){
    if (error.responseCode) res.status(error.responseCode);
    const Response = new ErrorResponse(error.message);
    if(error.errorCode) Response.errorCode = error.errorCode;
    res.json(Response.toJson());
}

module.exports = {
    error404,
    viewError
}