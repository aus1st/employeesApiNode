import mongoose from "mongoose";
mongoose.set('strictQuery', false);
const dbUri = 'mongodb+srv://ahmed:mongoDbEmployee@cluster0.6ulaw.mongodb.net/employee_db?retryWrites=true&w=majority';
export function connectDb() {
    return mongoose.connect(dbUri);
}
