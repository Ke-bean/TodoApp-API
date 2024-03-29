 import express from "express";
import { getAllTodos, deleteTodo, updateTodo, create } from "../controllers/todo"; 
// import { isAuthenticated, isOwner } from "../middlewares";

export default(router: express.Router) =>{
    router.post("/todo/create", create);
    router.get("/todos", getAllTodos);
    router.delete("/todo/:id",deleteTodo);
    router.patch("/todo/:id", updateTodo);
};