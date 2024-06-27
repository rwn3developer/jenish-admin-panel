const express = require('express');
const { loginpage, registerpage, dashboardpage } = require('../controllers/AuthController');

const routes = express.Router();

routes.get('/',loginpage);
routes.get('/register',registerpage)
routes.get('/dashboard',dashboardpage)

module.exports = routes;