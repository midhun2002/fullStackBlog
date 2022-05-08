const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    Title: {
        type : String,
        required : true
    },
    Tag :{
        type : String,
        required : true 
    },
    Description : {
        type : String,
        required : true
    }

},{timestamps : true});

const Blog = mongoose.model("Blog",BlogSchema);
module.exports = Blog;