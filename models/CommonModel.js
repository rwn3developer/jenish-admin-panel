const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    }
})

const UserModel = mongoose.model('user',userSchema);


//category model 
const categorySchema = mongoose.Schema({
    category : {
        type : String,
        required : true 
    },
})

const CategoryModel = mongoose.model('category',categorySchema)


//subcategory model
const subcategorySchema = mongoose.Schema({
    subcategory : {
        type : String,
        required : true 
    },
    categoryId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
})

const SubcategoryModel = mongoose.model('subcategory',subcategorySchema)



module.exports = {
    UserModel , CategoryModel , SubcategoryModel
}; 