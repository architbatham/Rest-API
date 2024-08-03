import express from 'express';
import bodyParser from 'body-parser';
const app = express();


//to link routers
import userRouter from './routes/user.router.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

//route Level middleware to load routes
app.use("/user",userRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001")