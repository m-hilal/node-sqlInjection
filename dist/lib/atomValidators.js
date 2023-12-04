"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("./Constants/Constants");
class atomValidators {
    static sqlInjectionFunction(req) {
        const pattern = Constants_1.Constants.CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD;
        for (const field in req.body) {
            if (pattern.test(req.body[field])) {
                throw new Error(`${Constants_1.Constants.CONST_SQL_ERROR_BAD_REQUEST}: ${field}`);
            }
        }
        return true;
    }
    static sqlInjectionMiddleware(req, res, next) {
        const pattern = Constants_1.Constants.CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD;
        for (const field in req.body) {
            if (pattern.test(req.body[field])) {
                return res.status(Constants_1.Constants.HTTP_CODE['VALIDATION_FAILED']).json({ message: `${Constants_1.Constants.CONST_SQL_ERROR_BAD_REQUEST}: ${field}` });
            }
        }
        next();
    }
}
exports.default = atomValidators;
