/* The `HttpError` class in TypeScript extends the Error class and includes a statusCode property for
representing HTTP error responses. This class i use as the parent of the other error class*/
class HttpError extends Error {
    public statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = "HttpError"
    }
}
export default HttpError;

