import express from 'express';
import { createNote, getNotes } from '../controllers/notes';
import protect from '../middlewares/protect';
const router = express.Router();

router.route('/notes').post(protect, createNote).get(protect, getNotes);

export default router;
