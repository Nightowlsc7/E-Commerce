

const db = require('../model-mysql/index')
const axios = require('axios')


module.exports = { 

 selectAll :async function(req,res){
    try {
        const user= await db.User.findAll({})
        res.status(200).send(user)
        
    } catch (error) {
        throw error
        
    }

 },




 selectByColor:async function(req,res){
    try { 
        const findColor=req.params.color
        const project = await db.Product.findAll({ where: { color: findColor } })
        res.send(project)   
    }
    catch { (error)=> { throw error} }
 },
 selectOne:async function(req,res){
    try { 
        const findId=req.params.id
        const project = await db.Product.findAll({ where: { id: findId } })
        res.send(project)   
    }
    catch { (error)=> { throw error} }
 },
 SelectByName:async function(req,res){
    try { 
        const find=req.params.name
        const project = await db.Product.findAll({ where: { name: find } })
        res.send(project)   
    }
    catch { (error)=> { throw error} }
 },

 SelectByCategory:async function(req,res){
 try { 
    const findcateg=req.params.category
        const project = await db.Product.findAll({ where: {  category :findcateg} })
        res.send(project)   
    }
    catch { (error)=> { throw error} }
 },






 addOne:async function(req,res){

 },
 deleteOne:async function(req,res){

 },
 UpdateOne :async function(req,res){

 } 
 };
