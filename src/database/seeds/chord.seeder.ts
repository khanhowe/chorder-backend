import { DataSource } from 'typeorm';
import { Chord } from '../../chords/chord.entity';

export const seedUsers = async (
    dataSource: DataSource,
    overrides?: Partial<Chord>,
): Promise<void> => {
    const chordsRepository = dataSource.getRepository(Chord);

    const defaultValues: Partial<Chord> = {
        name: 'C Major',
        description: 'A C major triad',
        notes: 'C4:E4:G4',
    };

    const chordProperties: Partial<Chord> = {
        ...defaultValues,
        ...overrides,
    };

    const user = chordsRepository.create(chordProperties);
    await chordsRepository.save(user);
};
