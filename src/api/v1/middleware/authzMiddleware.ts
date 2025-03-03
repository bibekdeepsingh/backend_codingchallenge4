import { Request, Response, NextFunction } from "express";

// Middleware to check user roles
export const authorizeRole = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userRole = res.locals.role;

        if (userRole !== requiredRole) {
            return res.status(403).json({ error: "Forbidden: Insufficient permissions" });
        }

        next();
    };
};
