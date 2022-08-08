const express  = require('express')
const router = express.Router()

const data = require('../data')

let {people} = data

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    const {name}=req.body;
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
})

router.post('/postman',(req,res)=>{
    const {name}=req.body;
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,data:[...people,name]})
})

router.put('/:id',(req,res)=>{
    const {id} = req.params
    const {name}= req.body
    const person = people.find((person)=>person.id===Number(id))
    if (!person){
        return res.status(400).json({success:false,msg:'please check your id'})
    }
    const newPeople=people.map((person)=>{
        if (person.id===Number(id)){
            person.name=name;
        }
        return person;
    })
    res.status(200).json({success:true,data:newPeople})
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id===Number(id))
    if (!person){
        return res.status(400).json({success:false,msg:`there is no person with the id ${id}`})
    }
    const newPeople=people.filter((person)=>person.id!==Number(id))
    res.status(200).json({success:true,data:newPeople})
})

module.exports=router