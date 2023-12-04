import { Constants } from './Constants/Constants';
import {Request, Response, NextFunction} from "express"


export default class atomValidators <T = any>{

    static sqlInjectionFunction(req : Request){
        const pattern = Constants.CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD

        for (const field in req.body) {
            if (pattern.test(req.body[field])){
                    throw new Error(`${Constants.CONST_SQL_ERROR_BAD_REQUEST}: ${field}`);
            }
        }
        return true
    }


    static sqlInjectionMiddleware(req : Request, res: Response, next: NextFunction){
        const pattern = Constants.CONST_DEFAULT_RESTRICTED_WORDS_IN_PAYLOAD
        for (const field in req.body) {
            if (pattern.test(req.body[field])){
                    return res.status(Constants.HTTP_CODE['VALIDATION_FAILED']).json({ message : `${Constants.CONST_SQL_ERROR_BAD_REQUEST}: ${field}`})
            }
        }
        next()
    }

}