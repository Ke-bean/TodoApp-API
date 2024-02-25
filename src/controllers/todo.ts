import express from "express";
import { getTodos, deleteTodoById, getTodoById,createTodo, getTodoByCategory } from "../db/todos";

export const create = async (req: express.Request, res: express.Response) =>{
    try{
        const {category, description} = req.body;
        if(!category || !description ){
            return res.sendStatus(400);
        }
        const existringTodo = await getTodoByCategory(category);
        if(existringTodo){
            return res.sendStatus(400);
        }
        const todo = await createTodo({
            category,
            description,
        });
        return res.status(200).json(todo).end();  
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}
export const getAllTodos = async (req: express.Request, res: express.Response) =>{
    try{
        const todos = await getTodos();
        return res.status(200).json(todos)
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
} 
export const deleteTodo = async (req: express.Request, res: express.Response) =>{
    try{
        const { id } = req.params;
        const deletedTodo = await deleteTodoById(id);
        return res.json(deletedTodo);
    }catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}
export const updateTodo = async (req: express.Request, res: express.Response) =>{
    try{
        const { id } = req.params;
        const { category } = req.body;
        if(!category){
            res.sendStatus(400);
        }
        const todo = await getTodoById(id);
        todo.category = category;
        await todo.save();
        return res.status(200).json(todo).end;
    }catch(error){
        console.log(error);
        res.sendStatus(400);
    }
}