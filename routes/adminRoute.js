const express = require('express');
const { viewAdmin, addAdminPage } = require('../controllers/Adminontroller');
const passport = require('passport');


const routes = express.Router();

routes.get('/',viewAdmin) 
routes.get('/addadmin',addAdminPage)


module.exports = routes;