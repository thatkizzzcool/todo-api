import express from 'express';
import { body } from 'express-validator';
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todoControllers.js";
import { validateTodo } from "../middlewares/validateTodo.js";

const router = express.Router();

const validatoTodo = [
    body("profession").notEmpty().withMessage("Profession is required"),
    body("plan").notEmpty().withMessage("Plan is required"),
    body("day").notEmpty().withMessage("Day is required")
];

router.get("/", getTodos);
router.post("/", validateTodo, addTodo);
router.put("/", updateTodo);
router.delete("/:ID", deleteTodo);

export default router;