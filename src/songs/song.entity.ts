import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import { Progression } from '../progressions/progression.entity';

@Entity()
export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Progression)
    @JoinTable({ name: 'song_progressions' })
    progressions: Progression[]; // Songs can have multiple chord progressions
}
