"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoById = exports.deleteTodoById = exports.createTodo = exports.getTodoById = exports.getTodoByCategory = exports.getTodos = exports.todoModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    category: { type: String, required: true },
    description: { type: String, required: true }
});
exports.todoModel = mongoose_1.default.model("Todos", todoSchema);
const getTodos = () => exports.todoModel.find();
exports.getTodos = getTodos;
const getTodoByCategory = (category) => exports.todoModel.findOne({ category });
exports.getTodoByCategory = getTodoByCategory;
const getTodoById = (id) => exports.todoModel.findById({ id });
exports.getTodoById = getTodoById;
const createTodo = (values) => new exports.todoModel(values).save().then((todo) => todo.toObject());
exports.createTodo = createTodo;
const deleteTodoById = (id) => exports.todoModel.findOneAndDelete({ _id: id });
exports.deleteTodoById = deleteTodoById;
const updateTodoById = (id, values) => exports.todoModel.findByIdAndUpdate(id, values);
exports.updateTodoById = updateTodoById;
//# sourceMappingURL=todos.js.map