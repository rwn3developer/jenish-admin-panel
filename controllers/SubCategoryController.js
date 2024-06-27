const { CategoryModel, SubcategoryModel } = require("../models/CommonModel");



const index = async(req,res) => {
    //join two table
    try{
        let subcat = await SubcategoryModel.find({}).populate("categoryId");
        
        return res.render('admin/subcategory/view-sub-category',{
            subcategory : subcat
        });
    }catch(err){
        console.log(err);
        return false
    }
    
}

const addsubcategory = async(req,res) => {
    try{
        let cat = await CategoryModel.find({});
        return res.render('admin/subcategory/add-sub-category',{
            category : cat
        });
    }catch(err){
        console.log(err);
        return false
    }   
}

const addsubcategoryrecord=  async(req,res) => {
    try{
        let subcat = await SubcategoryModel.create({
            subcategory : req.body.subcategory,
            categoryId : req.body.category
        })
        console.log("subcategory added");
        return res.redirect('/admin/subcategory/addsubcategory');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    index,addsubcategory,addsubcategoryrecord
}