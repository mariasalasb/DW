const express=require("express");
const router=express.Router();
const controlador=require("../controller/index");
const jsonWebToken=require('jsonwebtoken');
const myJWTSecretKey= 'adafrtw445!def_?gdf';
const cookieparser=require("cookie-parser");
router.use(cookieparser());
//const validateDto=require('../middleware/validate-dto');
const verify=require('../middleware/verify');
//const devDto=require('../dto/dev');

router.get('/admin',controlador.admin);

router.get('/view/contact-list',controlador.contactlist);

router.get('/view/user-list',controlador.userlist);

router.get('/view/company-list',controlador.companylist);

router.get('/search/contact',controlador.searchcontact);

router.get('/search/user',controlador.searchuser);

router.get('/search/pais',controlador.searchpais);

router.get('/search/citiesbycountry',controlador.searchcitiesbycountry);

router.get('/search/contact-list',controlador.searchcontactlist);

router.get('/search/company',controlador.searchcompany);

router.get('/search/city',controlador.searchcity);

router.get('/search/region',controlador.searchregion);

router.get('/filter/rcc',controlador.filterrcc);

router.get('/view/cities',controlador.selectcities);

router.get('/view/countries',controlador.selectcountries);

router.get('/view/regions',controlador.selectregions);

router.get('/view/totalrows',controlador.totalrows);

router.put('/add/contact',verify.useradmin,controlador.addcontact);

router.put('/add/city',verify.useradmin,controlador.addcity);

router.put('/add/citywithcountryid',verify.useradmin,controlador.addcitywithcountryid);

router.put('/add/country',verify.useradmin,controlador.addcountry);

router.put('/add/countrywithregion',verify.useradmin,controlador.addcountrywithregion);

router.put('/add/region',verify.useradmin,controlador.addregion);

router.put('/add/user',verify.useradmin,controlador.adduser);

router.put('/add/company',verify.useradmin,controlador.addcompany);

router.put('/update/contact',verify.useradmin,controlador.updatecontact);

router.put('/update/user',verify.useradmin,controlador.updateuser);

router.put('/update/company',verify.useradmin,controlador.updatecompany);

router.put('/update/city',verify.useradmin,controlador.updatecity);

router.put('/update/pais',verify.useradmin,controlador.updatepais);

router.put('/update/region',verify.useradmin,controlador.updateregion);

router.post('/login',verify.verifypass,controlador.login);

router.post('/borrarcookie',controlador.borrarcookie);

router.get('/session',controlador.session);

router.delete('/delete/contact',verify.useradmin,controlador.deletecontact);

router.delete('/delete/user',verify.useradmin,controlador.deleteuser);

router.delete('/delete/company',verify.useradmin,controlador.deletecompany);

router.delete('/delete/city',verify.useradmin,controlador.deletecity);

router.delete('/delete/country',verify.useradmin,controlador.deletecountry);

router.delete('/delete/region',verify.useradmin,controlador.deleteregion);

router.delete('/bulkdelete',verify.useradmin,controlador.bulkdelete);

module.exports=router;