
import { getUserDb,insertUserDb,getUsersDb } from "../model/userDb.js";
import { hash } from "bcrypt";



const getUser = async(req,res)=>{
    res.json(await getUserDb(req.params.id))
}

const getUsers = async(req,res)=>{
    res.json(await getUsersDb())
}

const insertUser = async(req, res)=>{
    const  {name, surname, age, fav_coding_lang, fav_car, eye_color, username, password} = req.body
    let {cookie} = req.headers
    console.log(cookie);
    
 // bcrypt code
     let hashedP = await hash(password, 10)
     console.log(hashedP);
     if(hashedP.stack) throw (hashedP)
         await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,hashedP)
         res.send('Data was sent successfully')
         console.log('Data was inserted successfully')
 }

const loginUser = (req,res)=>{
    res.json({
        message:"User logged in successfully",
        token:req.body.token
    })
}
export {loginUser,getUser,getUsers,insertUser}