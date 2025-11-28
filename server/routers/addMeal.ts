import express from 'express'
import addMeal from '../controllers/addMeal.js';
const router = express.Router();

router.get('/', addMeal)

export default router;

