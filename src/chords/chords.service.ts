import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChordsRepository } from './chords.repository';
import { Chord } from './chord.entity';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChordsService {
    constructor(
        @InjectRepository(ChordsRepository)
        private chordRepository: ChordsRepository,
    ) {}
    createChord(createChordDto: CreateChordDto, user: User): Promise<Chord> {
        return this.chordRepository.createChord(createChordDto, user);
    }
}
