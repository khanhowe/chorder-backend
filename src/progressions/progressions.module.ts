import { Module } from '@nestjs/common';
import { ProgressionsService } from './progressions.service';
import { ProgressionsController } from './progressions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progression } from './progression.entity';
import { Song } from 'src/songs/song.entity';
import { Chord } from 'src/chords/chord.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Progression, Song, Chord]), AuthModule],
    providers: [ProgressionsService],
    controllers: [ProgressionsController],
})
export class ProgressionsModule {}
