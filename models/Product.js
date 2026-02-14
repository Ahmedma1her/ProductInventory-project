const mongoose =require("mongoose")

const productSchema= new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    category:{
        type: String,
        default: "other"
    },
    price: {
        type: Number,
        required:true,
        min:15,
        
    }
},{timestamps:true})


const Product= mongoose.model("Product",productSchema)
module.exports=Product