const express =require("express");
const postsRouter=express.Router();
const jwt = require('jsonwebtoken');
const {postModel}=require("../model/post.model.js")
const bcrypt=require("bcrypt");
const {UserModel}=require("../model/user.model.js")

postsRouter.get("/",async(req,res)=>{
    
try{

    if(req.query==min){
        let min=req.query.min;
        let max=req.query.max;
const post=await postModel.find([{no_of_comments:{$gt:min}},{no_of_comments:{$lt:max}}])
res.send(post);}
    
    if(req.query==single){
        const post=await UserModel.find({is_married:false})
        res.send(post);
            }
}catch(err){
    console.log(err)
}
})

postsRouter.post("/add",async (req,res)=>{
    try{
        const post=new postModel(req.body);
        await  post.save();
        res.send("Notes have been added")
    }catch(err){
        console.log(err);
    }
    
  
})

postsRouter.patch("/update/:id",async (req,res)=>{
    const id=req.params.id;
    const data=req.body;
    try{
        const posts=await postModel.findByIdAndUpdate({_id:id},data);
        res.send("updated")
    }catch(err){
        res.send("Error wile updating data")
    }
})

postsRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id;
    try{
        const post=await postModel.findByIdAndDelete({_id:id});
        res.send("deleted successfuly")
    }catch(err){
        res.send("Error wile deleting data")
    }
})

module.exports={
    postsRouter 
}