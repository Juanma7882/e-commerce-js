import HttpError from "./HttpError";

/* The class `UnauthorizedError` extends `HttpError` and represents a 401 Unauthorized error. 
A 401 Unauthorized error is an HTTP client-side status code indicating that a request to a server failed because it lacks valid authentication credentials. It means the server received the request but requires valid login credentials (username/password or token) to process it. 
*/
class UnauthorizedError extends HttpError {

    constructor(message: string) {
        super(message, 401);
        this.name = "UnauthorizedError";
    }

}
export default UnauthorizedError