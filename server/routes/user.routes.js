const router = require('express').Router();
const verifyToken=require('../middleware/middleware.Authentication')



const {selectAll,selectOne,addOne,deleteOne,UpdateOne,register,login}=require('../controllers/user.controller')




router.get("/",verifyToken,selectAll);
router.post("/register",register);
router.post("/login",login);
router.post("/",addOne);




module.exports = router;
