import { ChordType, chordTypes, noteSemitones } from "../utils/keyboardNotes";

export class ChordAnalysisService {

    public calculateChordType(notes: string[]): string {
        const stortedNotes = this.sortNotesBySemitones(notes);

        const intervals = this.calculateIntervalsFromRoot(stortedNotes);

        for (const type in chordTypes) {
            if (this.intervalsEqual(intervals, chordTypes[type as ChordType])) {
                return type as ChordType;
            }
        }
        return ChordType.Unknown;
    }

    private calculateIntervalsFromRoot(sortedNotes: string[]): number[] {
        const intervals: number[] = [];
        const rootNote = sortedNotes[0].slice(0, -1);
        const rootSemitone = noteSemitones[rootNote];
    
        for (let i = 1; i < sortedNotes.length; i++) {
            const note = sortedNotes[i].slice(0, -1);
            const semitone = noteSemitones[note];
            const interval = (semitone - rootSemitone + 12) % 12;
            intervals.push(interval);
        }
        return intervals;
    }
    
    private intervalsEqual(arr1: number[], arr2: number[]): boolean {
        return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    }


    private sortNotesBySemitones(notes: string[]): string[] {
        return notes.slice().sort((a, b) => {
            const noteA = a.slice(0, -1);
            const noteB = b.slice(0, -1);
            return noteSemitones[noteA] - noteSemitones[noteB];
        });
    }
  
}