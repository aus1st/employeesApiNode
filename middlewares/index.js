import { isValidObjectId } from "mongoose";
export function validateDbId(req, res, next) {
    if (isValidObjectId(req.params.id) === false) {
        res.status(400).json({ 'error': `given object id ${req.params.id} is not value` });
    }
    else
        next();
}
export function notFound(req, res) {
    res.status(404).json({
        'error': `no record found with this id ${req.params.id}`
    });
}
