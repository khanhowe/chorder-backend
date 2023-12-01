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

    @ManyToOne(() => User, (user) => user.chords, { eager: false })
    user: User;
}
