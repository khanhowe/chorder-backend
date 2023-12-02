import { Injectable } from '@nestjs/common';
import { ChordsRepository } from './chords.repository';
import { Chord } from './chord.entity';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChordsService {
    constructor(private chordRepository: ChordsRepository) {}

    createChord(createChordDto: CreateChordDto, user: User): Promise<Chord> {
        return this.chordRepository.createChord(createChordDto, user);
    }

    getChordById(id: string, user: User): Promise<Chord> {
        return this.chordRepository.getChordById(id, user);
    }

    deleteChordById(id: string, user: User): Promise<void> {
        return this.chordRepository.deleteChordById(id, user);
    }
}
