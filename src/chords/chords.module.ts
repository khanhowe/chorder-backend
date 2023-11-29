import { Module } from '@nestjs/common';
import { ChordsService } from './chords.service';
import { ChordsController } from './chords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chord } from './chord.entity';
import { ChordsRepository } from './chords.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Chord])],
    providers: [ChordsService, ChordsRepository],
    controllers: [ChordsController],
})
export class ChordsModule {}
