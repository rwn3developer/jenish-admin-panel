const express = require('express');


const routes = express.Router();

const passport = require('passport');

const authcontroller = require('../controllers/AuthController');

routes.use('/',require('./authRoute'));
routes.use('/admin',require('./adminRoute'));

routes.post('/register',authcontroller.register)
routes.post('/loginUser',passport.authenticate('local',{failureRedirect : '/'}),authcontroller.loginUser);
routes.get('/logout',authcontroller.logout)
routes.post('/forgotPassword',authcontroller.forgotPassword)
routes.get('/otp',authcontroller.otp)
routes.post('/otpPost',authcontroller.otpPost)
routes.get('/newpassword',authcontroller.newpassword)
routes.post('/newpasswordPost',authcontroller.newpasswordPost)

routes.use('/admin/category',require('./categoryRoute'))
routes.use('/admin/subcategory',require('./subcategoryRoute'))



module.exports = routes;