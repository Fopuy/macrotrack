import express from 'express'
import { getMeal } from '../controllers/indexController.js';
const router = express.Router();

router.get('/', getMeal)

export default router;