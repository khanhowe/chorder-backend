import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Progression } from 'src/progressions/progression.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Song, Progression])],
    providers: [SongsService],
    controllers: [SongsController],
})
export class SongsModule {}
