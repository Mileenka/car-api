import express from 'express';

import carControllers from '../controllers/car.js'
// import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', carControllers.getCars);
router.get('/add-car', carControllers.getAddCar);
router.post('/add-car', carControllers.addCar);

export default router;