import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    category: {type: String, required: true},
    description: {type: String, required: true}
})
export const todoModel = mongoose.model("Todos", todoSchema);
export const getTodos = () => todoModel.find();
export const getTodoByCategory = (category: string)=> todoModel.findOne({ category });
export const getTodoById = (id: string) => todoModel.findById({ id });
export const createTodo = (values: Record<string, any>)=> new todoModel(values).save().then((todo)=> todo.toObject());
export const deleteTodoById = (id:string)=> todoModel.findOneAndDelete({ _id: id });
export const updateTodoById = (id: string, values: Record<string, any>) => todoModel.findByIdAndUpdate(id, values);