const express  = require('express')
const app = express()
const data = require('./data')

let {people} = data

app.use(express.static('./methods-public'))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

app.listen(5000,()=>{
    console.log('Server connected on port 5000 ... ')
})