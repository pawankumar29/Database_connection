const express=require('express');
const {MongoClient}=require('mongodb');
const url="mongodb://localhost:27017";
const db="Bank";
const con=new MongoClient(url);


const app=express();

app.delete('/hello',async(req,res)=>{
    const r1=await con.db(db);
    const r2=await r1.collection("bank1");
    const r3=await r2.deleteOne({"name":"aman"});
    console.log(r3);
    res.send(r3);
})

app.listen(3000);





