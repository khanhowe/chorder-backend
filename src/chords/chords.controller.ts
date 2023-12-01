import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { Chord } from './chord.entity';
import { ChordsService } from './chords.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateChordDto } from './dto/create-chord.dto';

@Controller('chords')
@UseGuards(AuthGuard())
export class ChordsController {
    private logger = new Logger('ChordsController');
    constructor(private chordsService: ChordsService) {}

    @Post()
    createChord(@Body() createChordDto: CreateChordDto): Promise<Chord> {
        this.logger.log(`Creating new chord`);
        return this.chordsService.createChord(createChordDto);
    }
}
