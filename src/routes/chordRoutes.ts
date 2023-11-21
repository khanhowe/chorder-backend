import { Router } from 'express';
import { analyzeNotes } from '../controllers/chordController';

const router = Router();

router.post('/analyze-notes', analyzeNotes);

export default router;