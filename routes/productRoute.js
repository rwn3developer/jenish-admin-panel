const express = require('express');
const { index, addproduct } = require('../controllers/Productontroller');

const routes = express.Router();

routes.get('/',index);
routes.get('/addproduct',addproduct);

module.exports = routes;