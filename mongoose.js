
const mongoose=require('mongoose');

const express=require('express');


const main=async()=>{
 await mongoose.connect("mongodb://localhost:27017/Bank");

const schema=new  mongoose.Schema({
    name:String,
    Age:Number
});

const model= mongoose.model('coll',schema);
  let data=new model({name:"pawan",Age:28});
  let res=await data.save();
  console.log(res);
}

main().then((r)=>{
    console.log(r);
});

