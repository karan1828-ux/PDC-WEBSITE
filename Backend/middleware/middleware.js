import jwt from "jsonwebtoken"
import pool from "../config/PostgresConfig.js"

export default async function isloggedIn(req,res,next){
    try{
        const token=req.cookies.token || req.headers.authorization?.split(' ')[1]
        if(!token){
        return res.status(404).json({message:"Unauthorized User"})
     }
     
     const data=jwt.verify(token,process.env.JWT_KEY)
     
     const findUser=await pool.query(`SELECT * from users where id=$1 `,[data.id])

     if(findUser.rows.length===0){
         return res.status(401).json({message:"User Not Found"})
        }
        req.userId=findUser.rows[0].id
        next()
    }catch(err){
        console.log(err)
        return res.status(401).json({message:"Something went wrong"})
    }
}