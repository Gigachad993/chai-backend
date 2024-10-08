import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:"./.env"});
const port = process.env.PORT || 4000;

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.log("ERROR: ", error)
        })
        app.listen(port, () => {
            console.log("app is listing at " + port);
        })
    })
    .catch(err => {
        console.log("ERROR IN CONNECTION WITH DB !!! ", err);
    })












/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listing at port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("ERROR: ", error);
    }
})()
*/