const express = require('express');
const app = express();
const path  = require('path');

app.use(express.static('./navbar-app'))

// app.get('/',(req,res)=>{
//     // res.status(200).send('Welcome Home :)');
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// })

app.get('/about',(req,res)=>{
    res.status(200).send('about Home ;)');
})
app.all('*',(req,res)=>{
    res.status(404).send('Not Found :( ');
})
app.listen(5000,()=>{
    console.log('server connected on port 5000...')
})
