import { Controller, Logger, Post } from '@nestjs/common';
import { Chord } from './chord.entity';
import { ChordsService } from './chords.service';

@Controller('chords')
export class ChordsController {
    private logger = new Logger('ChordsController');
    constructor(private chordsService: ChordsService) {}
    @Post()
    createChord(): Promise<Chord> {
        this.logger.log(`Creating new chord`);
        return this.chordsService.createChord();
    }
}
