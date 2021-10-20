class Codegym extends Error {
    /**
     * Constructor Custom Error
     * @param {*} status [400 - 401 - and others]
     * @param {*} type [0:Error, 1:Validation]
     * @param {*} id
     * @param {*} message [System Message]
     * @param {*} messageUser
     */
    constructor(status, type, id, message, messageUser, cause) {
        super(message);

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;
        this.status = status || 500;
        this.type = type || 0;
        this.id = id || 0;

        this.message =
            message || "Ocurrió un error inesperado. Por favor, intenta de nuevo";

        this.messageUser = messageUser || this.message;

        this.cause = cause;
    }

    static get STATUS_BAD_REQUEST() {
        return 400;
    }

    static get TYPE_ERROR() {
        return 0;
    }
}

module.exports = Codegym;
