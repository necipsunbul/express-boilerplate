class ErrorManager extends Error{
    responseCode;
    errorCode;
    constructor(message) {
        super(message);
    }
}

module.exports = ErrorManager;