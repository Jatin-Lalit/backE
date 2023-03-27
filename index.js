const express =require("express");

const{connection}=require("./db.js");
const { userrouter } = require("./routs/user.js");
const app=express();
const {postsRouter}=require("./routs/post.js")
const {auth}=require("./middleware/auth.middleware.js")
const cors=require("cors");

app.use(express.json());
app.use(cors());
app.use("/users",userrouter)

app.use(auth);
app.use("/post",postsRouter)
app.listen(1212, async ()=>{
    try{
        await connection
         console.log("connected");
    }catch(err){
console.log(err)
    }
    console.log("ok")
   
})