const express=require("express");
//const apiErrorHandler = require("./error/api-error-handler");
const router=require('./routes');

const app=express();
app.use(express.json());
app.use("/", router);
app.use(express.static(__dirname+'/static'));
//app.use(apiErrorHandler);


app.listen(5500,()=>console.log("Servidor escuchando en puerto 5500"));
