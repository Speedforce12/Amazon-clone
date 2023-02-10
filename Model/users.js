import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },

  { timestamps: true }
);

const Users = models.users || model("users", userSchema);

export default Users;
