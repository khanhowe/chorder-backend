import { Module } from '@nestjs/common';
import { ChordsService } from './chords.service';
import { ChordsController } from './chords.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chord } from './chord.entity';
import { ChordsRepository } from './chords.repository';
import { AuthModule } from 'src/auth/auth.module';
import { Progression } from 'src/progressions/progression.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Chord, Progression]), AuthModule],
    providers: [ChordsService, ChordsRepository],
    controllers: [ChordsController],
})
export class ChordsModule {}
