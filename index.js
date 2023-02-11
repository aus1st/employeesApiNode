import express from 'express';
import bodyParser from 'body-parser';
//local imports
import { connectDb } from './db.js';
import employeeRoutes from './controllers/employee.controller.js';
const app = express();
let port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);
async function StartApp() {
    try {
        await connectDb();
        console.log('database connected');
        app.listen(port, () => {
            console.log(`server started at ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
await StartApp();
