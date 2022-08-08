const data = require('../data')

let {people} = data

const login = (req,res)=>{
    const {name}=req.body;
    if (name){
        return res.status(200).send(`welcome ${name} :)`)
    }
    res.status(401).send('Please verify your identity :(')
}

const getPeople = (req,res)=>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res)=>{
    const {name}=req.body;
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,person:name})
}

const createPersonPostman = (req,res)=>{
    const {name}=req.body;
    if (!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    res.status(201).json({success:true,data:[...people,name]})
}

const updatePerson = (req,res)=>{
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
}

const deletePerson = (req,res)=>{
    const {id} = req.params
    const person = people.find((person)=>person.id===Number(id))
    if (!person){
        return res.status(400).json({success:false,msg:`there is no person with the id ${id}`})
    }
    const newPeople=people.filter((person)=>person.id!==Number(id))
    res.status(200).json({success:true,data:newPeople})
}

module.exports = {
    login,
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    deletePerson
}