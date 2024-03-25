const express = require("express");
const router = require('express').Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne,selectByColor,SelectByName,SelectByCategory,myProducts}=require('../controllers/products.controller')


router.get("/SearchByColor/:color",selectByColor)
router.get("/myProducts/:userid",myProducts);
router.get("/SearchById/:id",selectOne)
router.get("/SearchByName/:name",SelectByName)
router.get("/SearchByCategory/:category",SelectByCategory)
router.get("/",selectAll);
router.get("/:id",selectOne);
router.post("/",addOne);
router.delete("/:id",deleteOne);
router.patch("/:id",UpdateOne);


module.exports = router;
