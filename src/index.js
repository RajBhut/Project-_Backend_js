//require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({path : './env'})
connectDB()



/*
import exprees from "express";
const app = exprees()

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
            app.on("error", (error) => { console.log("error", error); throw error })

            
            app.listen(process.env.PORT, () => {
                console.log(`appp is listening on port ${process.env.PORT}`)
            })



        }

        catch (err) {
            console.error("error: ", error)
            throw err
        }
    })
    */