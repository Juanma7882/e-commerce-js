import HttpError from "./HttpError";

/* The class `NotFoundError` extends `HttpError` and represents a 404 Not Found error.
  The Error 404 is useful when communication with the server is successful but the resources now not exist
*/
class NotFountError extends HttpError {

    constructor(message: string) {
        super(message, 404);
        this.name = "NotFoundError"
    }
}

export default NotFountError