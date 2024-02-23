import express from "express";
import { getAllUsers } from "../controllers/todos"; 
export default(router: express.Router) =>{
    router.get("/users", getAllUsers);
};