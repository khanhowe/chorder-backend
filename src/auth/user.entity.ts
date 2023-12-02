import { Chord } from '../chords/chord.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Progression } from '../progressions/progression.entity';
import { Song } from '../songs/song.entity';
import { Exclude } from 'class-transformer';

/* eslint-disable indent */
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
    username: string;

    @Column()
    @Exclude({ toPlainOnly: true })
    password: string;

    @OneToMany(() => Chord, (chord) => chord.user)
    chords: Chord[];

    @OneToMany(() => Progression, (progression) => progression.user)
    progressions: Progression[];

    @OneToMany(() => Song, (song) => song.user)
    songs: Song[];
}
