const router = require('express').Router();
const verifyToken=require('../middleware/middleware.Authentication')


const {getAll,addOne,register,login,loginProfile,logoutProfile ,updateOne,}=require('../controllers/user.controller')



router.get("/",getAll);
router.post("/register",register);
router.post("/login",login);
router.post("/login/profile",verifyToken,loginProfile);
router.post("/logout",verifyToken,logoutProfile);
router.patch("/:id",verifyToken,updateOne);




router.post("/",addOne);




module.exports = router;
