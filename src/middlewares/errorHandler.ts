import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/ApiError";

export const globalErrorHandler = (
    err: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            error: {
                code: err.code,
                message: err.message,
                ...(err.details !== undefined && {
                    details: err.details,
                }),
            },
        });
    }

    console.error(err);

    return res.status(500).json({
        success: false,
        error: {
            code: "INTERNAL_ERROR",
            message: "An unexpected error occurred",
        },
    });
};