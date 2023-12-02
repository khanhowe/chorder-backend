import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Chord } from '../chords/chord.entity';
import { Exclude } from 'class-transformer';
import { User } from '../auth/user.entity';

@Entity()
export class Progression {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @ManyToOne(() => Chord)
    chords: Chord[];

    @ManyToOne(() => User, (user) => user.progressions)
    @Exclude({ toPlainOnly: true })
    user: User;
}
