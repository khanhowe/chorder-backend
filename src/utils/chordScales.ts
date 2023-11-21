import { ChordType } from "./keyboardNotes";

type Scale = ChordType[];

export const majorScale: Scale = [
    ChordType.Major,
    ChordType.Minor,
    ChordType.Minor,
    ChordType.Major,
    ChordType.Major,
    ChordType.Minor,
    ChordType.Diminished
];

export const naturalMinorScale: Scale = [
    ChordType.Minor,
    ChordType.Diminished,
    ChordType.Major,
    ChordType.Minor,
    ChordType.Minor,
    ChordType.Major,
    ChordType.Major
];