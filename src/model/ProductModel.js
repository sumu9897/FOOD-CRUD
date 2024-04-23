const mongoose=require('mongoose')

const DataSchema=mongoose.Schema({
    name:{type:String,required:true},
    code:{type:Number,required:true},
    image:{type:String,required:true},
    category:{type:Number,required:true},
    QTY:{type:Number,required:true},
    price:{type:Number,required:true}

},{timestamps:true,versionKey:false})

const ProductModel=mongoose.model('food',DataSchema)
module.exports=ProductModel;