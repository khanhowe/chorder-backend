import { Request, Response } from "express";
import { ChordAnalysisService } from "../services/ChordAnalysisService";

const chordAnalysisService = new ChordAnalysisService();

export const analyzeNotes = (req: Request, res: Response) => {
    const notes = req.body.notes;
    const analysisResult = chordAnalysisService.analyzeNotes(notes);

    res.json(analysisResult);
}