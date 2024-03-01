//functions thats going to be the authenticator 

//middleware //authentication
const auth =async(req,res,next)=>{
    const {password,username}= req.body
    const hashedPassword=await checkUser(username)
    bcrypt.compare(password,hashedPassword, (err,result)=>{
        if (err) throw err
        if(result===true){
           next()
        }else{
            res.send({msg:'The username or password is incorrect'})
        }
    })
}


const authenticate = (req, res) => {
    let cookies = req.headers
    console.log(cookies)
}


//Users
app.post('/users',(req,res)=>{ 
    console.log(req.body);
    const {username,password} = req.body
    bcrypt.hash(password,10,async(err,hash)=>{
        if (err) throw err
        await addUser(username,hash)
        res.send({
            msg:"you have created an account"

        } )
    })
})


//login
app.post('/login',(req,res)=>{
    const{username}=req.body
    const token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
    res.cookie('jwt')
    res.json({
        // token:token
        msg:"you have logged in "
    })
})