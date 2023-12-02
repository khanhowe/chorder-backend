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
export class Chord {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    notes: string;

    @ManyToMany(() => Progression, (progression) => progression.chords)
    @JoinTable({ name: 'progression_chords' })
    progressions: Progression[];

    @ManyToOne(() => User, (user) => user.chords)
    @Exclude({ toPlainOnly: true })
    user: User;
}
