import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import {connection} from "./database/connection.js"
const app = express();

config({path:"./config/config.env"})

// connect with frontend ................................

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.get("/", (req , res) => {
    res.send("hlw g ")
})


app.use(cookieParser);
connection();

//middleware ......................................

app.use(express.json());
app.use(express.urlencoded({extended:true}))

export default app;
