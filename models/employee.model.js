import mongoose from "mongoose";
import { Schema } from "mongoose";
const Employee = new Schema({
    fullName: String,
    position: String,
    location: String,
    salary: Number,
});
export default mongoose.model('Employee', Employee, 'employees');
