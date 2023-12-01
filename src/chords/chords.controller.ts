import {
    Body,
    Controller,
    Get,
    Logger,
    Param,
    Post,
    UseGuards,
} from '@nestjs/common';
import { Chord } from './chord.entity';
import { ChordsService } from './chords.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';
import { GetUser } from '../auth/get-user.decorator';

@Controller('chords')
@UseGuards(AuthGuard())
export class ChordsController {
    private logger = new Logger('ChordsController');
    constructor(private chordsService: ChordsService) {}

    @Post()
    createChord(
        @Body() createChordDto: CreateChordDto,
        @GetUser() user: User,
    ): Promise<Chord> {
        this.logger.log(`Creating new chord`);
        return this.chordsService.createChord(createChordDto, user);
    }

    @Get('/:id')
    getChordById(
        @Param('id') id: string,
        @GetUser() user: User,
    ): Promise<Chord> {
        return this.chordsService.getChordById(id, user);
    }
}
