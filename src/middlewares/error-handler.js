/**
 * Error handler middleware.
 * Uses status code from error if present.
 */
export async function errorHandler(ctx, next) {
    try {
        await next();
    } catch (err) {
        console.log(err);
        ctx.status = err.statusCode || 500;
        ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err };
    }
}
