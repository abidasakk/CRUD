const { text } = require('express')
let mongoose=require('mongoose')
let Schema=mongoose.Schema
let blogSchema = new Schema({
  nom:{
    type:String,
    require:true
  },
  email:{
    type:string,
    require:true
  },
  password:{
    type:string,
    require:true
  },
  password1:{
    type:string,
    require:true
  }
},{timestamps:true})

let Carnet=mongoose.model('Carnet',blogSchema)

module.exports= Carnet;