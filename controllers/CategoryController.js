const { CategoryModel } = require("../models/CommonModel");



const index = (req,res) => {
    return res.render('admin/category/view-category');
}

const addcategory = (req,res) => {
    return res.render('admin/category/add-category');
}

const addcategoryrecord = async(req,res) => {
    try{
        let cate = await CategoryModel.create({
            category : req.body.category
        })
        console.log("record insert");
        return res.redirect('/admin/category/addcategory');
    }catch(err){
        console.log(err);
        return false
    }
}

module.exports = {
    index,addcategory,addcategoryrecord
}