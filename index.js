"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atomValidators = void 0;
const atomValidators_1 = __importDefault(require("./lib/atomValidators"));
exports.atomValidators = atomValidators_1.default;
// Testing Apis and Validators
// import express from "express"
// import {Request, Response} from "express"
// const app = express()
// app.use(express.json())
// app.get("/testing", (req, res, )=>{
//     console.log("API HIT")
//     console.log(req.body)
//     res.status(404).json(atomValidators.sqlInjectionFunction(req))
// })
// app.post("/testing/middleware", atomValidators.sqlInjectionMiddleware, (request: Request, response : Response)=> {
//     return response.status(200).json({code : 200, message : "success"})
// })
// app.listen(3000, ()=>console.log("listening on the port"))
