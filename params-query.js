const express = require('express')
app=express()
const {products} = require('./data');

app.get('/',(req,res)=>{
    res.status(200).send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const {id,name,image}=product;
        return {id,name,image}
    })
    res.status(200).json(newProducts);
})


app.listen(5000,()=>{
    console.log('Server connecting on port 5000')
})