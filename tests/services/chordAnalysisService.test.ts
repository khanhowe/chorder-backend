import { ChordAnalysisService } from "../../src/services/ChordAnalysisService";
import { ChordType } from "../../src/utils/keyboardNotes";

describe('ChordAnalysisService', () => {
    let chordAnalysisService: ChordAnalysisService;

    beforeEach(() => {
        chordAnalysisService = new ChordAnalysisService();
    })

    describe('calculateChordType()', () => {
        it('Should calculate the chord type of a C Major Triad', () => {
            const notes: string[] = ['C4', 'E4', 'G4'];
            
            const result = chordAnalysisService.calculateChordType(notes);
            expect(result).toBe(ChordType.Major);
        });
    })

});