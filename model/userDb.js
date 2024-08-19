import {pool} from '../config/config.js'
// import {config} from 'dotenv'
// config()



const getUserDb = async(id)=>{
    let [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id])
    return data
}

const getUsernameDb = async(username)=>{
    let [data] = await pool.query('SELECT * FROM users WHERE username = ?', [username])
    return data
}

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data
}

const insertUserDb = async(name,surname,age,fav_coding_lang,fav_car,eye_color,username,password)=>{
    await pool.query('INSERT INTO users(name,surname,age,fav_coding_lang,fav_car,eye_color,username,password) VALUES (?,?,?,?,?,?,?,?)',[name,surname,age,fav_coding_lang,fav_car,eye_color,username,password])
}




export {getUserDb,getUsersDb,getUsernameDb,insertUserDb}