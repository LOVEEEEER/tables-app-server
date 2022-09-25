import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import * as TableController from "./controllers/TableController.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";
import { tableCreateValidation } from "./utils/validations.js";

mongoose
  .connect(
    "mongodb+srv://admin:fsEM233a@cluster0.s18blhs.mongodb.net/table?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB OK"))
  .catch((err) => console.log("DB error", err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/v1/table", TableController.getAll);
app.post(
  "/api/v1/table",
  tableCreateValidation,
  handleValidationErrors,
  TableController.create
);
app.delete("/api/v1/table/:id", TableController.remove);

app.listen(process.env.PORT || 4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
