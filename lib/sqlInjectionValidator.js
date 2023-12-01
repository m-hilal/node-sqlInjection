"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class sqlInjectionValidator {
    static sqlInjection(req, res, next) {
        // Check for SQL injection patterns in request body
        const patterns = [/SELECT/i, /INSERT/i, /UPDATE/i, /DELETE/i, /FROM/i, /WHERE/i];
        for (const field in req.body) {
            if (patterns.some((pattern) => pattern.test(req.body[field]))) {
                return res.status(400).json({ error: 'Potential SQL injection detected' });
            }
        }
        next();
    }
}
exports.default = sqlInjectionValidator;
