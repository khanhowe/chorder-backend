export const noteSemitones: Record<string, number> = {
    'C': 0, 'C#': 1, 'Db': 1, 'D': 2, 'D#': 3, 'Eb': 3, 'E': 4, 'F': 5,
    'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8, 'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11
};


export enum ChordType {
    Major = 'Major',
    Minor = 'Minor',
    Diminished = 'Diminished',
    Augmented = 'Augmented',
    Major7th = 'Major 7th',
    Dominant7th = 'Dominant 7th',
    Minor7th = 'Minor 7th',
    Suspended4th = 'Suspended 4th',
    Suspended2nd = 'Suspended 2nd',
    Major9th = 'Major 9th',
    Minor9th = 'Minor 9th',
    Major6th = 'Major 6th',
    Minor6th = 'Minor 6th',
    MajorAdd9 = 'Major add9',
    MinorAdd9 = 'Minor add9',
    Major6_9 = 'Major 6/9',
    Dominant9th = 'Dominant 9th',
    Diminished7th = 'Diminished 7th',
    HalfDiminished7th = 'Half Diminished 7th',
    Major13th = 'Major 13th',
    Minor13th = 'Minor 13th',
    MinorMajor7th = 'Minor/Major 7th',
    Minor11th = 'Minor 11th',
    Unknown = 'Unknown',
}

export const chordTypes: Record<ChordType, number[]> = {
    [ChordType.Major]: [4, 7],
    [ChordType.Minor]: [3, 7],
    [ChordType.Diminished]: [3, 6],
    [ChordType.Augmented]: [4, 8],
    [ChordType.Major7th]: [4, 7, 11],
    [ChordType.Dominant7th]: [4, 7, 10],
    [ChordType.Minor7th]: [3, 7, 10],
    [ChordType.Suspended4th]: [5, 7],
    [ChordType.Suspended2nd]: [2, 7],
    [ChordType.Major9th]: [4, 7, 11, 14],
    [ChordType.Minor9th]: [3, 7, 10, 14],
    [ChordType.Major6th]: [4, 7, 9],
    [ChordType.Minor6th]: [3, 7, 9],
    [ChordType.MajorAdd9]: [4, 7, 14],
    [ChordType.MinorAdd9]: [3, 7, 14],
    [ChordType.Major6_9]: [4, 7, 9, 14],
    [ChordType.Dominant9th]: [4, 7, 10, 14],
    [ChordType.Diminished7th]: [3, 6, 9],
    [ChordType.HalfDiminished7th]: [3, 6, 10],
    [ChordType.Major13th]: [4, 7, 11, 14, 17],
    [ChordType.Minor13th]: [3, 7, 10, 14, 17],
    [ChordType.MinorMajor7th]: [3, 7, 11],
    [ChordType.Minor11th]: [3, 7, 10, 14, 17, 21],
    [ChordType.Unknown]: []
  };
