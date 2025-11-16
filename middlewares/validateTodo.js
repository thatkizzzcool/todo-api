import { body, validationResult } from "express-validator";

export const validateTodo = [
    body("profession")
    .notEmpty()
    .withMessage("Profession is required"),

    body("plan")
    .notEmpty()
    .withMessage("Plan is required"),

    body("day")
    .notEmpty()
    .withMessage("Day is required"),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];