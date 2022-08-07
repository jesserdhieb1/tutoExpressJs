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
app.get('/api/products/:id_product',(req,res)=>{
    const {id_product}=req.params;
    console.log(req.params)
    const singleProduct=products.find((product)=>product.id===Number(id_product));
    if(!singleProduct){
        return res.status(404).send('<h1>404 Not Found :(</h1>');
    }
    else{
        return res.send(singleProduct);
    }
})
app.get('/api/products/:id_product/reviews/:id_review',(req,res)=>{
    res.send(`<h1>product id is ${req.params.id_product} and review id is ${req.params.id_review}</h1>`)
    console.log(req.params)

})
app.listen(5000,()=>{
    console.log('Server connecting on port 5000')
})