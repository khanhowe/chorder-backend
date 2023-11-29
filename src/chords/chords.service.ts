import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChordsRepository } from './chords.repository';
import { Chord } from './chord.entity';

@Injectable()
export class ChordsService {
    constructor(
        @InjectRepository(ChordsRepository)
        private chordRepository: ChordsRepository,
    ) {}
    createChord(): Promise<Chord> {
        return this.chordRepository.createChord();
    }
}
