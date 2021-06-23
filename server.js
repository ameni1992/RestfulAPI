const express=require('express');
const app =express();
const mongoose=require('mongoose');
require('dotenv').config({ path: './config/.env' });
const User=require('./models/User');
const userRouter =require('./Routes/Route')

//connection to DB
const connectionToDB=async()=>{
    mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology: true})
    .then(()=>console.log('Connected to DataBase...'))
    .catch(err=>console.error('Could not connect',err));
    }
    connectionToDB();
//Midlleware
app.use(express.json());

//route
app.use(userRouter)


const PORT=process.env.PORT||8000

app.listen(PORT,()=>console.log(`Server has started on ${PORT}`))
