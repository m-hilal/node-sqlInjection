import sqlInjectionValidator from "./sqlInjectionValidator";
import express from "express";

const app = express();

app.use(express.json());
app.use(sqlInjectionValidator.sqlInjection);

app.post('/sqlinjection', function(req, res, next){
  res.status(200).send("working");
})


// app.listen(3000, function(){
//   console.log('app running');
// });