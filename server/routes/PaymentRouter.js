const express=require('express')
const { add,verify } = require('../controllers/Payment')

const Router=express.Router()

Router.post('/pay',add)
Router.post('/pay/:id',verify)

module.exports=Router