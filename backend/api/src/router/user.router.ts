import {Router} from 'express';
import userController from '../user/user.controller';


const router = Router();

router.get('/list', userController.getUserList);


export default router;
