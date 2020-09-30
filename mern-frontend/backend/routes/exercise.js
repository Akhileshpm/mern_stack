const express = require('express')
const router = express.Router();
let exercise = require('../models/exercise.model')

router.use(express.json())

router.get('/',(req,res)=>{
    exercise.find()
    .then(result => res.send(result))
    .catch(err => res.status(400).send('Error'+ err))
})
router.get('/:id',(req,res)=>{
    exercise.findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(400).send('Error'+ err))
})
router.delete('/:id',(req,res)=>{
    exercise.findByIdAndDelete(req.params.id)
    .then(() => res.send("Exercise deleted"))
    .catch(err => res.status(404).send('Error'+ err))
})

router.post('/update/:id',(req,res)=>{
    exercise.findById(req.params.id)
    .then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise.save()
    .then(()=>res.send("updated"))
    .catch(err=> res.status(400).send(err))
    })
    .catch(err=>res.status(400).send(err))
})

router.post('/add',(req,res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const newexs = new exercise({username,description,duration,date})   

newexs.save()
    .then(()=>res.send(username + " added"))
    .catch(err => res.status(400).send('Error' + err))
})
module.exports = router;