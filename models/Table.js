import mongoose from "mongoose";

const TableSchema = new mongoose.Schema(
  {
    // date: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      unique: true,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// TableSchema.index({ name: 1}, { dropDups: true });

export default mongoose.model("Table", TableSchema);
