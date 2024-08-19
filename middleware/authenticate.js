import { compare } from "bcrypt";
import {getUsernameDb} from "../model/userDb.js";
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config()



const checkUser = async(req,res,next)=>{
    const {username,password} = req.body;


    let hashedPassword = (await getUsernameDb(username)).password

    let result = await compare(password,hashedPassword)
        if(result==true){ 
            let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
            console.log(token);
            req.body.token = token
            next()
    }else{
        res.send('Password inncorrect')

    }

    const verifyAToken =(req,res,next)=>{
        let { cookie } = req.headers
        //checks if token exists first
        let token = cookie && cookie.split('=')[1]

        console.log(token);
        jwt.verify(token.process.env.SECRET_KEY,(err,decoded)=>{
            if(err){
                res.json({message:'Invalid token'})
                return  
            }
            req.body.username = decoded.username
            console.log(decoded);
            
        })
        next()
        
    }
    
}

export {checkUser,verifyAToken}
