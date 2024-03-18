"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.getAllTodos = exports.create = void 0;
const todos_1 = require("../db/todos");
const create = async (req, res) => {
    try {
        const { category, description } = req.body;
        if (!category || !description) {
            return res.sendStatus(400);
        }
        const existringTodo = await (0, todos_1.getTodoByCategory)(category);
        if (existringTodo) {
            return res.sendStatus(400);
        }
        const todo = await (0, todos_1.createTodo)({
            category,
            description,
        });
        return res.status(200).json(todo).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.create = create;
const getAllTodos = async (req, res) => {
    try {
        const todos = await (0, todos_1.getTodos)();
        return res.status(200).json(todos);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllTodos = getAllTodos;
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTodo = await (0, todos_1.deleteTodoById)(id);
        return res.json(deletedTodo);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteTodo = deleteTodo;
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { category } = req.body;
        if (!category) {
            res.sendStatus(400);
        }
        const todo = await (0, todos_1.getTodoById)(id);
        todo.category = category;
        await todo.save();
        return res.status(200).json(todo).end;
    }
    catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};
exports.updateTodo = updateTodo;
//# sourceMappingURL=todo.js.map