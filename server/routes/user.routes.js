const router = require('express').Router();
const verifyToken=require('../middleware/middleware.Authentication')



const {selectAll,selectOne,addOne,deleteOne,UpdateOne,register,login,SelectByName, SelectByCategory,selectByColor,loginProfile,logoutProfile}=require('../controllers/user.controller')

router.get("/SearchByColor/:color",selectByColor)
router.get("/SearchById/:id",selectOne)
router.get("/SearchByName/:name",SelectByName)
router.get("/SearchByCategory/:name",SelectByCategory)

router.get("/",verifyToken,selectAll);
router.post("/register",register);
router.post("/login",login);
router.post("/login/profile",verifyToken,loginProfile);
router.post("/logout",verifyToken,logoutProfile);


router.post("/",addOne);




module.exports = router;
