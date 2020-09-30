const express = require('express')
const router = express.Router();
let user = require('../models/user.model')

router.use(express.json())

router.get('/',(req,res)=>{
    user.find()
    .then(result => res.send(result))
    .catch(err => res.status(400).send('Error'+ err))
})

router.get('/:id',(req,res)=>{
    user.find()
    .then(result =>{
        const a=result.filter(result=>result.data.username==req.params.id)
        res.send(a)
        
    }
        )
    .catch(err => res.status(400).send('Error'+ err))
})
router.post('/add',(req,res)=>{
    const username = req.body.username;
    const newuser = new user({username})

newuser.save()
    .then(()=>res.send(username + " added"))
    .catch(err => res.status(400).send('Error' + err))
})
module.exports = router;