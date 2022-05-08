const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Blog = require('./blog')
const app = express()
app.use(express.json())
app.use(cors())
require("dotenv").config()
const url = 'mongodb+srv://rogon_96:Midhunreddy134%40@cluster0.5mckx.mongodb.net/test';

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
.then((res) => app.listen(process.env.PORT || 8001 ,()=>console.log("Listening")))
.catch(err => console.log(err))

app.get('/posts',(req,res)=>{
    Blog.find()
    .then(result=>res.send(result))
    .catch(err => console.log(err))
})
app.post('/posts',(req,res)=>{
    console.log(req.body)
    const blog = new Blog({
        Title : req.body.Title,
        Tag : req.body.Tag,
        Description : req.body.Content
    })
    blog.save()
    .then(result => res.send(result))
    .catch(err => console.log(err))
})
app.get('/posts/:id',(req,res)=>{
    Blog.findById({_id :req.params.id})
    .then(result=>res.send(result))
    .catch(err => console.log(err))
})

