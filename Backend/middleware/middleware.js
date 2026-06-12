import jwt from "jsonwebtoken";
import pool from "../config/PostgresConfig.js";

export default async function isloggedIn(req, res, next) {
    try {
        let token = req.cookies.token;

        const authHeader = req.headers.authorization;

        if (!token && authHeader?.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({
                message: "Authentication required"
            });
        }

        const data = jwt.verify(token, process.env.JWT_KEY);

        if (!data?.id) {
            return res.status(401).json({
                message: "Invalid token payload"
            });
        }

        const findUser = await pool.query(
            `SELECT * FROM users WHERE id=$1`,
            [data.id]
        );

        if (findUser.rows.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        req.user = findUser.rows[0];
        req.userId = findUser.rows[0].id;

        next();
    } catch (err) {
        console.error(err);

        if (
            err instanceof jwt.TokenExpiredError ||
            err instanceof jwt.JsonWebTokenError
        ) {
            return res.status(401).json({
                message: "Invalid or expired token"
            });
        }

        return res.status(500).json({
            message: "Internal server error"
        });
    }
}