import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm';
import { Progression } from '../progressions/progression.entity';
import { User } from '../auth/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Song {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    title: string;

    @ManyToMany(() => Progression)
    @JoinTable({ name: 'song_progressions' })
    progressions: Progression[]; // Songs can have multiple chord progressions

    @ManyToOne(() => User, (user) => user.songs, { eager: false })
    @Exclude({ toPlainOnly: true })
    user: User;
}
