import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Progression } from '../progressions/progression.entity';

@Entity()
export class Chord {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    notes: string;

    @ManyToMany(() => Progression, (progression) => progression.chords)
    @JoinTable({ name: 'progression_chords' })
    progressions: Progression[];
}
