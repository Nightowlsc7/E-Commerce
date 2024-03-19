const db = require('../model-mysql/index')
module.exports = { 
    add:async (req,res)=>{
    try {
    const profile=await db.Profile.create(req.body)
    res.json(profile)
        } catch (error) {
    throw error     
    }
},
    update :async(req,res)=>{
    try {
        let _id=req.params.id
        const profile= await db.Profile.update(req.body,{where:{id:_id}})
        res.status(201).send(profile)
        } catch (error) {
        throw error
    }
},
    getAll:async(req,res)=>{
    try {
        const profile=await db.Profile.findAll({})
        res.json(profile)
    } catch (error) {
        throw error
    }
    },
    remove:async(req,res)=>{
        try {
            let _id=req.params.id
            const profile=db.Profile.destroy({where:{id:_id}})
            res.json(profile)
        } catch (err) {
            throw err
        }
    }
};
