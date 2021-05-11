const Database=require('../dataBase/index');
const DB = Database.sequelize();
const jsonWebToken=require('jsonwebtoken');
const myJWTSecretKey= 'adafrtw445!def_?gdf';
const cookieparser=require("cookie-parser");
//var bodyParser = require('body-parser');
//const ApiError=require('../error/api-error');

module.exports = {
    verifypass:(req,res,next)=>{
        const {USER,PASS}=req.body;
        DB.query("SELECT * FROM USUARIOS WHERE USUARIO='"+USER+"'" ,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            console.log(resultado)
            console.log(resultado[0].PASSWORD)
            if (resultado[0]==undefined){
                res.status(403).json("Usuario inexistente");
            }
            else if(resultado[0].PASSWORD!==PASS){
                res.status(400).json("Usuario y contraseña incorrectas");
            }
            else{
                next();
            }
        })
    },
        useradmin: (req,res,next) => {
            const cookie=req.cookies.user;
            DB.query("SELECT PERFIL FROM USUARIOS WHERE USUARIO='"+cookie+"'"  ,{
                type:DB.QueryTypes.SELECT
            }).then((resultado) => {
                if(resultado[0].PERFIL=='Admin'){
                    next();
                }
                else{
                    res.status(403).json("El usuario no tiene permisos para realizar esta acción");
                    console.log("El usuario no tiene permisos para realizar esta acción");
                }
            });
        }
    }
