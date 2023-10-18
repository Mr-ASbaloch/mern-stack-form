const express =require ('express')
const app =express()
const dbConnection =require ('./db/dbConnection')
const user = require ('./db/dbUser')

// db connection 
dbConnection()
const port= 1000


//middleware usage

app.use (express.json())

//routes 

app.post ('/register', async(req, res)=>{

try {
    
    const{email , password} =req.body
    console.log(req.body);
    const newUser=new user({email, password})
    await newUser.save()
    res.status (201).json(  {message : 'register successfully'})


} catch (error) {
    
    console.log(error);
}
} )

app.listen(port, ()=>{
    console.log('server created and running ');
})


