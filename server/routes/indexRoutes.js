import { Router } from 'express';
import CategoryController from '../controllers/categoryController.js';
import ContinentController from '../controllers/continentalContoller.js';

const router = Router();

// CATEGORY - GET
router.get('/category/:continent', CategoryController.getAllCategory);

// CONTINENT - GET
router.get('/continent', ContinentController.getAllContinent);

export default router;
