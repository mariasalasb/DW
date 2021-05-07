const Database=require('../dataBase/index');
const DB = Database.sequelize();
const jsonWebToken=require('jsonwebtoken');
const myJWTSecretKey= 'adafrtw445!def_?gdf';
const cookieparser=require("cookie-parser");
//var bodyParser = require('body-parser');

module.exports = {

    contactlist: (req,res) => {
        const {amount}=req.query;
        const {filtro}=req.query;
        DB.query('SELECT * FROM CONTACTOS ORDER BY '+filtro+ ' ASC LIMIT '+amount,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
            //console.log(resultado);
        });
    },

    userlist: (req,res) => {
        const {filtro}=req.query;
        DB.query('SELECT * FROM USUARIOS ORDER BY '+filtro+ ' ASC',{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    companylist: (req,res) => {
        DB.query('SELECT * FROM COMPANIAS ORDER BY NOMBRE ASC ',{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchcontact: (req,res) => {
        const {id}=req.query;
        DB.query('SELECT * FROM CONTACTOS WHERE ID='+id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchpais: (req,res) => {
        const {NOMBRE_REGION}=req.query;
        DB.query("SELECT * FROM PAISES AS P INNER JOIN REGIONES AS R ON P.ID_REGION=R.ID WHERE NOMBRE_REGION='"+NOMBRE_REGION+"' ORDER BY NOMBRE_PAIS ASC",{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchcitiesbycountry: (req,res) => {
        const {NOMBRE_PAIS}=req.query;
        DB.query("SELECT * FROM CIUDADES AS C INNER JOIN PAISES AS P ON C.ID_PAIS=P.ID WHERE NOMBRE_PAIS='"+NOMBRE_PAIS+"' ORDER BY NOMBRE_CIUDAD ASC",{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchuser: (req,res) => {
        const {id}=req.query;
        DB.query('SELECT * FROM USUARIOS WHERE ID='+id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchcompany: (req,res) => {
        const {id}=req.query;
        DB.query('SELECT * FROM COMPANIAS WHERE ID='+id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchcity: (req,res) => {
        DB.query('SELECT * FROM CIUDADES ORDER BY NOMBRE_CIUDAD ASC',{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    searchregion: (req,res) => {
        DB.query('SELECT * FROM REGIONES ORDER BY NOMBRE_REGION ASC',{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    selectcities: (req,res) => {
        const {ciudad_id}=req.query;
        DB.query('SELECT NOMBRE_CIUDAD, NOMBRE_PAIS FROM CIUDADES AS C INNER JOIN PAISES AS P ON C.ID_PAIS=P.ID WHERE C.ID='+ciudad_id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    selectcountries: (req,res) => {
        const {pais_id}=req.query;
        DB.query('SELECT NOMBRE_PAIS, NOMBRE_REGION FROM PAISES AS P INNER JOIN REGIONES AS R ON P.ID_REGION=R.ID WHERE P.ID='+pais_id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    selectregions: (req,res) => {
        const {region_id}=req.query;
        DB.query('SELECT NOMBRE_REGION FROM REGIONES WHERE ID='+region_id,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    filterrcc: (req,res) => {
        DB.query('SELECT R.ID AS REGION_ID,NOMBRE_REGION, P.ID AS PAIS_ID,NOMBRE_PAIS,C.ID AS CIUDAD_ID,NOMBRE_CIUDAD FROM REGIONES AS R INNER JOIN PAISES AS P ON P.ID_REGION=R.ID INNER JOIN CIUDADES AS C ON C.ID_PAIS=P.ID ORDER BY NOMBRE_REGION ASC',{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    totalrows: (req,res) => {
        const {amount}=req.query;
        DB.query('SELECT COUNT(*) AS FILAS FROM CONTACTOS', {
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    addcontact: (req,res) => {
        const {NOMBRE,APELLIDO,MAIL,PAIS,REGION,COMPANIA,CARGO,INTERES,CIUDAD,DIRECCION,TWITTER,PREFERENCIATW,FACEBOOK,PREFERENCIAFB}=req.body;
        DB.query("INSERT INTO CONTACTOS (NOMBRE,APELLIDO,MAIL,PAIS,REGION,COMPANIA,CARGO,INTERES, CIUDAD, DIRECCION, TWITTER, PREFERENCIATW, FACEBOOK, PREFERENCIAFB) VALUES ('"+NOMBRE+"', '"+APELLIDO+"', '"+MAIL+"', '"+PAIS+"', '"+REGION+"', '"+COMPANIA+"', '"+CARGO+"', '"+INTERES+"', '"+CIUDAD+"', '"+DIRECCION+"', '"+TWITTER+"', '"+PREFERENCIATW+"', '"+FACEBOOK+"', '"+PREFERENCIAFB+"')",{
            type:DB.QueryTypes.INSERT
        }) .then((resultado) => {
            res.json("Contacto creado con exito");
        });
    },
    
    adduser: (req,res) => {
        const {NOMBRE,APELLIDO,EMAIL,PERFIL,USUARIO,PASSWORD}=req.body;
        DB.query("INSERT INTO USUARIOS (NOMBRE,APELLIDO,EMAIL,PERFIL,USUARIO,PASSWORD) VALUES ('"+NOMBRE+"', '"+APELLIDO+"', '"+EMAIL+"', '"+PERFIL+"', '"+USUARIO+"', '"+PASSWORD+"')",{
            type:DB.QueryTypes.INSERT
        }) .then((resultado) => {
            res.json("Contacto creado con exito");
        });
    },

    addcompany: (req,res) => {
        const {NOMBRE,DIRECCION,EMAIL,TELEFONO,CIUDAD}=req.body;
        DB.query("INSERT INTO COMPANIAS (NOMBRE,DIRECCION,EMAIL,TELEFONO,CIUDAD) VALUES ('"+NOMBRE+"', '"+DIRECCION+"', '"+EMAIL+"', '"+TELEFONO+"', '"+CIUDAD+"')",{
            type:DB.QueryTypes.INSERT
        }) .then((resultado) => {
            res.json("Compañía creada con exito");
        });
    },

    updatecontact: (req,res) => {
        const {id}=req.query;
        const {NOMBRE,APELLIDO,MAIL,PAIS,REGION,COMPANIA,CARGO,INTERES,CIUDAD,DIRECCION,TWITTER,PREFERENCIATW,FACEBOOK,PREFERENCIAFB}=req.body;
        DB.query("UPDATE CONTACTOS SET NOMBRE ='"+NOMBRE+"', APELLIDO='"+APELLIDO+"', MAIL ='"+MAIL+"', COMPANIA='"+COMPANIA+"',CARGO ='"+CARGO+"', CIUDAD='"+CIUDAD+"',REGION='"+REGION+"',PAIS= '"+PAIS+"%' ,DIRECCION= '"+DIRECCION+"',INTERES= '"+INTERES+"',TWITTER= '"+TWITTER+"',PREFERENCIATW= '"+PREFERENCIATW+"',FACEBOOK= '"+FACEBOOK+"',PREFERENCIAFB= '"+PREFERENCIAFB+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    updateuser: (req,res) => {
        const {id}=req.query;
        const {NOMBRE,APELLIDO,EMAIL,PERFIL,USUARIO,PASSWORD}=req.body;
        DB.query("UPDATE USUARIOS SET NOMBRE ='"+NOMBRE+"', APELLIDO='"+APELLIDO+"', EMAIL ='"+EMAIL+"', PERFIL='"+PERFIL+"',USUARIO ='"+USUARIO+"', PASSWORD='"+PASSWORD+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    updatecompany: (req,res) => {
        const {id}=req.query;
        const {NOMBRE,DIRECCION,EMAIL,TELEFONO,CIUDAD}=req.body;
        DB.query("UPDATE COMPANIAS SET NOMBRE ='"+NOMBRE+"', DIRECCION='"+DIRECCION+"', EMAIL ='"+EMAIL+"', TELEFONO='"+TELEFONO+"',CIUDAD='"+CIUDAD+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    updatecity: (req,res) => {
        const {id}=req.query;
        const {NOMBRE_CIUDAD}=req.body;
        DB.query("UPDATE CIUDADES SET NOMBRE_CIUDAD ='"+NOMBRE_CIUDAD+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    updatepais: (req,res) => {
        const {id}=req.query;
        const {NOMBRE_PAIS}=req.body;
        DB.query("UPDATE PAISES SET NOMBRE_PAIS ='"+NOMBRE_PAIS+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    updateregion: (req,res) => {
        const {id}=req.query;
        const {NOMBRE_REGION}=req.body;
        DB.query("UPDATE REGIONES SET NOMBRE_REGION ='"+NOMBRE_REGION+"' WHERE ID="+id,{
            type:DB.QueryTypes.UPDATE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    addcity:(req,res)=>{
        const {ID_CIUDAD,NOMBRE_CIUDAD}=req.body;
        DB.query("SELECT ID_PAIS FROM CIUDADES WHERE ID="+ID_CIUDAD ,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            const id=resultado[0].ID_PAIS;
                DB.query("INSERT INTO CIUDADES (ID_PAIS,NOMBRE_CIUDAD) VALUES("+id+",'"+NOMBRE_CIUDAD+"')",{
                    type:DB.QueryTypes.INSERT
                }).then((resultado) => {
                    res.json("Ciudad agregada");
                })
            })
    },

    addcountry1:(req,res,next)=>{
        const {ID_PAIS,NOMBRE_PAIS}=req.body;
        DB.query("SELECT ID_REGION FROM PAISES WHERE ID="+ID_PAIS ,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            const id=resultado[0].ID_REGION;
                DB.query("INSERT INTO PAISES (ID_REGION,NOMBRE_PAIS) VALUES("+id+",'"+NOMBRE_PAIS+"')",{
                    type:DB.QueryTypes.INSERT
                }).then((resultado) => {
                    res.json("País agregado");
                    next();
                    })
            })
    },
    addcountry2:(req,res)=>{
        const {ID_PAIS,NOMBRE_PAIS}=req.body;
        DB.query("SELECT * FROM PAISES WHERE NOMBRE_PAIS='"+NOMBRE_PAIS+"'",{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            const idp=resultado[0].ID;
            DB.query("INSERT INTO CIUDADES (ID_PAIS,NOMBRE_CIUDAD) VALUES("+idp+",'xxx')",{
                type:DB.QueryTypes.INSERT
            }).then((resultado) => {
                res.json("Ciudad dummy agregada");
            })
        })
    },

    addregion:(req,res,next)=>{
        const {ID_REGION,NOMBRE_REGION}=req.body;
                DB.query("INSERT INTO REGIONES (NOMBRE_REGION) VALUES('"+NOMBRE_REGION+"')",{
                    type:DB.QueryTypes.INSERT
                }).then((resultado) => {
                    res.json("Region agregada");
                    DB.query("SELECT * FROM REGIONES WHERE NOMBRE_REGION='"+NOMBRE_REGION+"'",{
                        type:DB.QueryTypes.SELECT
                    }).then((resultado) => {
                        const idp=resultado[0].ID;
                        DB.query("INSERT INTO PAISES (ID_REGION,NOMBRE_PAIS) VALUES("+idp+",'PPP"+idp+"')",{
                            type:DB.QueryTypes.INSERT
                        }).then((resultado) => {
                            DB.query("SELECT P.ID  FROM PAISES AS P INNER JOIN REGIONES AS R ON P.ID_REGION=R.ID  WHERE NOMBRE_REGION='"+NOMBRE_REGION+"'",{
                                type:DB.QueryTypes.SELECT
                            }).then((resultado) => {
                                const idpp=resultado[0].ID;
                                DB.query("INSERT INTO CIUDADES (ID_PAIS,NOMBRE_CIUDAD) VALUES("+idpp+",'CCC"+idpp+"')",{
                                    type:DB.QueryTypes.INSERT
                                }).then((resultado) => {
                                    res.json("Región agregada");
                                })
                            })
                        })
                    })
                })
            },    

    login: (req,res)=>{
        const {USER,PASS}=req.body;
        const token=jsonWebToken.sign(req.body,myJWTSecretKey);
        res.cookie('token',token);
        res.cookie('user',USER);
        res.json("Log in exitoso");
    },

    session: (req,res) =>{
        const cookietoken=req.cookies.token;
        const tokenDecodedData=jsonWebToken.verify(cookietoken,myJWTSecretKey);
        res.json(tokenDecodedData);
        console.log(tokenDecodedData);
    },

    deletecontact: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM CONTACTOS WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },  

    deleteuser: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM USUARIOS WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    deletecompany: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM COMPANIAS WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    deletecity: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM CIUDADES WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    deletecountry: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM PAISES WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    deleteregion: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM REGIONES WHERE ID='+id,{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json(resultado);
        });
    },
    
    searchcontactlist: (req,res) => {
        const {amount}=req.query;
        const {palabra}=req.query;
        const {filtro}=req.query;
        DB.query("SELECT * FROM CONTACTOS WHERE NOMBRE LIKE '%"+palabra+"%' OR APELLIDO LIKE '%"+palabra+"%' OR MAIL LIKE '%"+palabra+"%' OR COMPANIA LIKE '%"+palabra+"%' OR CARGO LIKE '%"+palabra+"%' OR CIUDAD LIKE '%"+palabra+"%' OR REGION LIKE '%"+palabra+"%' OR PAIS LIKE '%"+palabra+"%'  ORDER BY "+filtro+ " ASC LIMIT " +amount,{
            type:DB.QueryTypes.SELECT
        }).then((resultado) => {
            res.json(resultado);
        });
    },

    

    borrarcookie: (req,res)=>{
        res.clearCookie("erase");
        res.json("Cookie borrada");
    },

    bulkdelete: (req,res) => {
        const {id}=req.query;
        DB.query('DELETE FROM CONTACTOS WHERE ID IN ('+id+')',{
            type:DB.QueryTypes.DELETE
        }).then((resultado) => {
            res.json("Contactos borrados");
        });
    },
    
}

