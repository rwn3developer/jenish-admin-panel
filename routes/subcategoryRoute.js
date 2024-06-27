const express = require('express');
const { index, addsubcategory, addsubcategoryrecord } = require('../controllers/SubCategoryController');

const routes = express.Router();


routes.get('/',index);
routes.get('/addsubcategory',addsubcategory);
routes.post('/addsubcategoryrecord',addsubcategoryrecord)


module.exports = routes;