import express from 'express';
import { createNote } from '../controllers/notes';
import protect from '../middlewares/protect';
const router = express.Router();

router.route('/notes').post(protect, createNote);

export default router;
