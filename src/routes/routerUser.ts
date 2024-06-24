import { Router } from "express";
import DB from '../controller/database';


import UserController from "../controller/user";



const userRouter = Router();

userRouter.get('/', DB.testConnection);
userRouter.get('/user', UserController.getAll);
userRouter.post('/user', UserController.createUser);
userRouter.patch('/me', UserController.updateUser);
userRouter.delete('/user/:id', UserController.delete);


userRouter.use('*', (_req, res) => {
    res.status(404).json({ message: 'Resource not found' });
});

export { userRouter };