const router = require('express').Router();
const {update,add,getAll,remove}=require('../controllers/profileC')
router.put("/profile/:id",update);
router.post("/profile",add)
router.get("/profile",getAll)
router.delete("/profile/:id",remove)
module.exports = router;
