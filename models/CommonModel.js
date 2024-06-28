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



const productSchema = mongoose.Schema({
    categoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    subcategoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    qty : {
        type : Number,
        default : 1
    },
    image : {
        type : String,
        required : true
    }
})

const ProductModel = mongoose.model('product',productSchema)

module.exports = {
    UserModel , CategoryModel , SubcategoryModel , ProductModel
}; 