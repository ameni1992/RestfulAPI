const express =require('express');
const router =express.Router();
const Users=require('../models/User')
// POST :  ADD A NEW USER TO THE DATABASE 
router.post('/New', async(req,res) =>{
    const newusers = new Users(req.body);

    
try {
  const result =  await newusers.save();
    res.status(200).send({message:"user added",result});
} catch (error) {
    res.status(500).send('server error');
    console.log(err)
}
});

//GET :  RETURN ALL USERS 
router.get('/all',async(req,res)=>{
    try {
        const users = await Users.find();
        res.send({message:"the list of users",users} )

    } catch (error) {
        res.status(500).send("server error")
        console.log(error)
    }
});
router.get('/:id',async(req,res)=>{
  try {
    const users = await Users.find({_id:req.params.id});
    res.status(200).send({message:'get user by id',users});
  } catch (error) {
    res.status(500).send({message:"server error",error:error.data})
        console.log(error)  
  }  
});
//PUT : EDIT A USER BY ID 
router.put('/:id',async(req,res)=>{
    try {
        const users=await Users.findOneAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}}
            );
            res.status(200).send({message:"user was updeted"})

    } catch (error) {
        res.status(500).send({message:"server error"})
        console.log(error)  
    }
})
//delete the user with the given id
router.delete('/:id', async (req, res) => {
    try {
    await Users.deleteOne({ _id: req.params.id });
        res.status(200).send("deleted");
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "cannot find any user" });
    }
});


module.exports=router;