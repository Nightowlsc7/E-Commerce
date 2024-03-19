const db = require('../model-mysql/index')
const axios = require('axios')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = { 
 register:async function(req,res){
    try {
        const { firstName,lastName,email,password } = req.body;
        const userExists = await db.User.findOne({
            where: {
                email:email
            }
        });
        if (userExists) {
            return res.status(400).send('Email is already associated with an account');
        }
        const hashedPassword = await bcrypt.hash(password, 15);
        const user = await db.User.create({ firstName,lastName,email,password :hashedPassword });        
        res.status(201).send(user);
        } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
        }


 },
 login:async function (req,res){
    try {
        const { firstName,lastName,email,password  } = req.body;
        const user = await db.User.findOne({
            where: {
                email:email
            }
        })
        if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', {
        expiresIn: '1h',
        });
        res.status(200).json({ token });
        } catch (error) {
        res.status(500).json({ error: 'Login failed' });
        }

 },
 
 addOne:async function(req,res){
    try {
        const user= await db.User.create(req.body)
        res.status(200).send(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }


 },
 selectOne:async function(req,res){
 },
 deleteOne:async function(req,res){    
 },
 UpdateOne :async function(req,res){

 },
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

 }