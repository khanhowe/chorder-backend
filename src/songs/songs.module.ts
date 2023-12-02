import { Module } from '@nestjs/common';
import { SongsService } from './songs.service';
import { SongsController } from './songs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song.entity';
import { Progression } from 'src/progressions/progression.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Song, Progression]), AuthModule],
    providers: [SongsService],
    controllers: [SongsController],
})
export class SongsModule {}
