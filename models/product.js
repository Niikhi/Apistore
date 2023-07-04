const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    price:{
        type: Number,
        required:[true,"Enter some Price"],
    },

    featured : {
        type:Boolean,
        default:false,
    },

    rating:{
        type:Number,
        default:4,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },

    company: {
        type:String,
        enum: {
            values: ["apple","microsoft" , "sony", "dell" ,"samsung", "mi"],
            message: `{VALUE} is not supported `,
        }
    },

    type: {
        type:String,
        required:true,
    }
});


//now we need to add under collections

module.exports = mongoose.model("Product",productSchema);