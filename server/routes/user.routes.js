const router = require('express').Router();



const {selectAll,selectOne,addOne,deleteOne,UpdateOne,SelectByName, SelectByCategory,selectByColor}=require('../controllers/user.controller')

router.get("/SearchByColor/:color",selectByColor)
router.get("/SearchById/:id",selectOne)
router.get("/SearchByName/:name",SelectByName)
router.get("/SearchByCategory/:name",SelectByCategory)

router.get("/",selectAll);

module.exports = router;
