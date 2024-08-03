
import '../models/connection.js';

export var save=(req,res)=>{
    console.log(req.body);
    res.send("its Working");
};