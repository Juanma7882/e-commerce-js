import HttpError from "./HttpError";

/* The `BadRequestError` class in TypeScript extends `HttpError` and represents a 400 Bad Request
error.
the server cannot process a request because of malformed syntax, incorrect data, or corrupted browser information (cookies/cache)
*/
class BadRequestError extends HttpError {
    constructor(message: string) {
        super(message, 400);
        this.name = "BadRequestError";
    }
}

export default BadRequestError