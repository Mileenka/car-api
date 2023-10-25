import { Router } from "express";
import userController from '../controllers/user.js'

const userRouter = Router();

userRouter.get('/register', userController.getRegister);
userRouter.get('/login', userController.getLogin);
userRouter.post('/register', userController.postRegister);
userRouter.post('/login', userController.postLogin);
userRouter.get('/logout', userController.getLogout);

export default userRouter;