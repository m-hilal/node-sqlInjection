"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class atomValidators {
    static sqlInjection(req) {
        const patterns = [/SELECT/i, /INSERT/i, /UPDATE/i, /DELETE/i, /FROM/i, /WHERE/i];
        for (const field in req.body) {
            if (patterns.some((pattern) => pattern.test(req.body[field]))) {
                throw new Error(`SQL ERROR: Potential SQL injection detected in '${field}' field`);
            }
        }
        return true;
    }
}
exports.default = atomValidators;
