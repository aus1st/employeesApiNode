import express from 'express';
let router = express.Router();
import Employee from '../models/employee.model.js';
router.get('/', (req, res) => {
    try {
        let data = Employee.find();
        res.send(data);
    }
    catch (error) {
        console.log(error);
    }
});
router.post('/', (req, res) => {
    try {
        let data = Employee.create(req.body);
        return res.send(data);
    }
    catch (error) {
        console.log(error);
    }
});
export default function employeeRoutes() {
    return router;
}
