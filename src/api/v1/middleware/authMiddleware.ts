import admin from "firebase-admin";
import { Request, Response, NextFunction } from "express";

// Middleware to verify Firebase ID token
export const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split("Bearer ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: No token provided" });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.locals.uid = decodedToken.uid;
        res.locals.role = decodedToken.role || "user"; // Default role if not set
        next();
    } catch (error) {
        return res.status(403).json({ error: "Forbidden: Invalid token" });
    }
};
