const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const user=process.env.USER_NAME
const password=process.env.PASSWORD
const uri = `mongodb+srv://${user}:${password}@atlascluster.gw1or1c.mongodb.net/prema-foundation?retryWrites=true&w=majority`;

const db=async()=>{
        try{
            await mongoose.connect(uri)
            console.log("database connected")
        }catch(err){
            console.log(err)
        }
}
module.exports=db