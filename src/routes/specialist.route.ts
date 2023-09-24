import express, { Router } from 'express';

const specialistRouter: Router = express.Router();

// get all specialist
specialistRouter.get('/');

// get a specialist
specialistRouter.get('/:sid');

// create a specialist
specialistRouter.put('/');

// update a specialist
specialistRouter.put('/');

// delete a specialist
specialistRouter.delete('/');

export default specialistRouter;
