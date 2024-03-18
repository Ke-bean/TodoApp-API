"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("../controllers/todo");
// import { isAuthenticated, isOwner } from "../middlewares";
exports.default = (router) => {
    router.post("/todo/create", todo_1.create);
    router.get("/todos", todo_1.getAllTodos);
    router.delete("/todo/:id", todo_1.deleteTodo);
    router.patch("/todo/:id", todo_1.updateTodo);
};
//# sourceMappingURL=todos.js.map