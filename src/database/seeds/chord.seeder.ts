import { EntityManager } from 'typeorm';
import { Chord } from '../../chords/chord.entity';

export const seedChord = async (
    manager: EntityManager,
    overrides?: Omit<Partial<Chord>, 'id'>,
): Promise<Chord> => {
    const defaultValues: Omit<Partial<Chord>, 'id'> = {
        name: 'C Major',
        description: 'A C major triad',
        notes: 'C4:E4:G4',
    };

    const newChord = manager.create(Chord, {
        ...defaultValues,
        ...overrides,
    });
    await manager.save(newChord);
    return newChord;
};
