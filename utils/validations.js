import { body } from "express-validator";

export const tableCreateValidation = [
  body("name", "Введите название имени").isLength({ min: 3 }).isString(),
  body("amount", "Введите колличество").isNumeric(),
  body("distance", "Введите расстояние").isNumeric(),
];
