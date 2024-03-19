const router = require('express').Router();

const {selectAll,selectOne,addOne,deleteOne,UpdateOne}=require('../controllers/user.controller')

router.get("/",selectAll);

module.exports = router;
