import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors  from "cors";
import mongoose, { mongo } from "mongoose";
import router from "./router";

export const app = express();
app.use(cors({
    credentials: true,
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);
server.listen(8080, () =>{
    console.log("Server is running on http://localhost:8080/")
})
const MONGO_URL = "mongodb+srv://chenqiua:beandenzel123333@cluster0.acdfvww.mongodb.net/Todo_App_API"
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("connected", ()=> console.log("mongoose connected"))
mongoose.connection.on("error", (error: Error)=> console.log(error)); 
app.use("/", router());

