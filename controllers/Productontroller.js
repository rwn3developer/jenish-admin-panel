const { ProductModel, CategoryModel, SubcategoryModel } = require("../models/CommonModel");

const index = (req,res) => {
    return res.render('admin/product/view-product')
}


const addproduct = async(req,res) => {
    try{

        return res.render('admin/product/add-product',{
            category : await CategoryModel.find({}),
            subcategory : await SubcategoryModel.find({})
        })
    }catch(err){
        console.log(err);
        return false;
    }
   
}

module.exports = {
    index,addproduct
}