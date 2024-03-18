

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
 selectOne:async function(req,res){

 },
 addOne:async function(req,res){

 },
 deleteOne:async function(req,res){

 },
 UpdateOne :async function(req,res){

 } 
 };
