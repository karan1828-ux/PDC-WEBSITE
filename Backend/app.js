import express from "express"

import dotenv from "dotenv"
dotenv.config()

import cookieParser from "cookie-parser"
import cors from "cors"
import pool from "./config/PostgresConfig.js"

const app=express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})