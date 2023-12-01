import { Constants } from './Constants/Constants.js';

export default class atomValidators <T = any>{

    static sqlInjection(req : any){
        const patterns = [/SELECT/i, /INSERT/i, /UPDATE/i, /DELETE/i, /FROM/i, /WHERE/i];

        for (const field in req.body) {
            if (patterns.some((pattern) => pattern.test(req.body[field]))) {
                throw new Error(`SQL ERROR: Potential SQL injection detected in '${field}' field`);
            }
        }
        return true
    }

}