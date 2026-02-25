import mongoose from "mongoose";
// import { DB_URL } from "./config.js";

mongoose
.connect(process.env.DB_URL)
.then(()=>{
    console.log("DB CONNECTED")
})
.catch((err)=>{
    console.log("DB NOT CONNECTED ", err)
})

export default mongoose;