import { Chord } from 'src/chords/chord.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

/* eslint-disable indent */
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany(() => Chord, (chord) => chord.user, { eager: true })
    chords: Chord[];

    @OneToMany(() => Chord, (progression) => progression.user, { eager: true })
    progressions: Chord[];

    @OneToMany(() => Chord, (song) => song.user, { eager: true })
    songs: Chord[];
}
