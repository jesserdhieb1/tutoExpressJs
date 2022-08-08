
const authorize = (req,res,next)=>{
    const {user}=req.query
    if(user==='jess'){
        req.user={name:'jess',age:22}
        next()
    }
    else{
        res.status(401).send('Unauthorized :(')
    }
}

module.exports=authorize;