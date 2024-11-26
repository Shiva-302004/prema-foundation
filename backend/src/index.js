const express=require("express")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
const PORT=process.env.PORT
const db=require("../db/dbconn")
const app=express()
app.use(express.json())
app.use(cors())
db().then(
app.listen(PORT,()=>{
    console.log("server connected")
})).catch((err)=>{
    console.log(err)
})