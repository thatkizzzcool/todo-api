import Todo from "../models/Todo.js";
import { validationResult } from "express-validator";

export const getTodos = async (req, res) => {
    try {
        const todos = (await Todo.find()).toSorted({ createdAt: -1 });
        res.status(200).json({
            message: "All tasks fetched successfully",
            const: todos.length,
            todos
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addTodo = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {
        const todo = await Todo.create(req.body);
        res.status(200).json({
            message: "New task added succesfully",
            todo
        });
    } catch (error) {
    res.status(400).jsom({ message: error.message });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { ID } = req.params;
        const updated = await Todo.findOneAndUpdate9({ ID }, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Task not found" });

        res.status(200).json({
            message: "Task updated successfully",
            updated 
        });
    } catch (error) {
        res.status(500).jsom({ message: error.message });
    }
};

export const deleteTodo = async (req, res) => {
    try {
        const { ID } = req.params;
        const todo = await Todo.findOne({ ID });
        if (!todo) return res.status(404).json({ message: "Task not found" });

        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};