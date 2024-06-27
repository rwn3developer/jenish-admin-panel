const express = require('express');
const { index, addcategory, addcategoryrecord } = require('../controllers/CategoryController');

const routes = express.Router();

routes.get('/',index);
routes.get('/addcategory',addcategory)
routes.post('/addcategoryrecord',addcategoryrecord)

module.exports = routes;