class ErrorManager extends Error{
    responseCode;
    errorCode;
    constructor(message,errorCode = null) {
        super(message);
        if(errorCode) this.errorCode = errorCode;
    }
}

module.exports = ErrorManager;