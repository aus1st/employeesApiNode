import express from 'express';
import {validateDbId,notFound} from '../middlewares/index.js';

let router = express.Router();
import Employee from '../models/employee.model.js'
import GenerateCurdMethod from '../services/index.js'

const employeeCrud = GenerateCurdMethod(Employee);



router.get('/', async (req,res)=>{
   
    try {
        let data =  await employeeCrud.getAll();        
        res.send(data);
    } catch (error) {
        console.log(error)
    }
   

});

router.get('/:id', validateDbId, async (req,res)=>{
   
    try {
        let data =  await employeeCrud.getById(req.params.id); 
        if(data) {
            res.send(data);
        } else 
            notFound(req,res);
                
    } catch (error) {
        console.log(error)
    }
   

});

router.post('/',async (req,res)=>{
    try {
       let data = await employeeCrud.create(req.body);
       return res.send(data);
    } catch (error) {
        console.log(error);
    }
});

router.put('/:id',validateDbId, async (req,res)=>{
   
    try {
        let data = await employeeCrud.update(req.params.id, req.body);
        if(data) {
         res.send(data)
        } else notFound(req,res);        
    } catch (error) {
        console.log(error);
    }

});

router.delete('/:id',validateDbId, async (req,res)=> {
    let data = await employeeCrud.delete(req.params.id);
    if(data) {
        res.send(data)
       } else notFound(req,res);
});

export default router;