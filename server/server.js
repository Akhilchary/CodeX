const express=require('express');
const cors=require('cors');


const app=express();
const PORT=3000;


// middleware
app.use(cors());

//    --global error handler
app.use((err,req,res,next)=>{
    res.status(err.status),
    res.json({
        error:{
            status:err.status,
            message:err.message
        }
    })
})

app.listen(PORT,()=>{
    console.log(`server started running on port ${PORT}`)
})