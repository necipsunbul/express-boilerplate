class BaseResponse{
    message;
    success;
    constructor(message) {
        this.message = message;
    }

    toJson(){
        return {
            ...this
        }
    }
}


class ErrorResponse extends  BaseResponse{
    errorCode;
    constructor(message,data) {
        super(message);
        this.success = false;
    }
}

class SuccessResponse extends  BaseResponse{
    data;
    constructor(message = null,data = null) {
        super(message || 'ok');
        this.success = true;
        if(data) this.data = data;
    }
}

module.exports = {
    ErrorResponse,
    SuccessResponse
}