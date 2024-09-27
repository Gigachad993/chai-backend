import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// for accepting the client side requests
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// for accepting the json data from client side request in body
app.use(express.json({
    limit: "20kb",
}))

// for encoding the data from the url (extended means we can accept nested objects also)
app.use(express.urlencoded({extended: true, limit: "16kb"}))

// it is used to server static files such as images, css, js and etc. the root argument specifies the root directory from which to serve static assets.
app.use(express.static("public"));

// it is used to get the cookie of a user from their browser and also used for set the cookie to the particular user's browser
app.use(cookieParser());


// import Routes
import healthcheckRouter from "./routes/healthcheck.routes.js";


// Routes
app.use("/api/v1/healthcheck", healthcheckRouter);    

export { app };