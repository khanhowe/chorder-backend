import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { Progression } from '../progressions/progression.entity';

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Progression)
    progressions: Progression[]; // Songs can have multiple chord progressions
}
