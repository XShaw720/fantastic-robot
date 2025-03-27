import {body, validationResult} from 'express-validator';

export const todoValidator = [
    body("id").exists().isString().notEmpty(),
    body("name").exists().isString().notEmpty(),
    body("isComplete").optional().isBoolean()
];

export const errorHandler = fn => (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error(`Received a bad request to ${fn.name}.`, { errors: errors.array() })
        return res.status(400).send({ errors: errors.array() });
    }
    
    Promise.resolve(fn(req, res, next)).catch(err => {
        console.error(`An error occured while calling ${fn.name}. `, err);
        res.status(500).send({ error: err.message });
    });

    console.log(`Successfully completed request to ${fn.name}.`);
};
