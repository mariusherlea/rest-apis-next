import { Schema, model, models } from "mongoose";
import { title } from "process";

const CategorySchema = new Schema(
  {
    title: { type: "string", require: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const Category = models.Category || model("Category", CategorySchema);

export default Category;
