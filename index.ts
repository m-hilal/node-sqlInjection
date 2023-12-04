import atomValidators from "./lib/atomValidators";

export {atomValidators};





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