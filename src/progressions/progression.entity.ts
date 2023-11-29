import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chord } from '../chords/chord.entity';

@Entity()
export class Progression {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @ManyToOne(() => Chord)
    chords: Chord[];
}
