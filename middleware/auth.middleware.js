const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
const token=req.headers.authorization;
if(token){
   const decoded= jwt.verify(token,"jatin")
   if(decoded){
   
   
    req.body.userID=decoded.UserId
    next();
   }else{
    res.send("please login first")
   }
}else{
    res.send("No Token Found")
}
}
module.exports={
    auth 
}