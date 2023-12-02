import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../auth/user.entity';
import { Song } from '../songs/song.entity';
import { Progression } from '../progressions/progression.entity';
import { Chord } from '../chords/chord.entity';

enum Stage {
    TEST = 'TEST',
    DEV = 'DEV',
    PROD = 'PROD',
}

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => {
                const stage = configService.get<string>('STAGE').toUpperCase();
                return {
                    type: configService.get<any>('DATABASE_TYPE'),
                    host: configService.get<string>('DATABASE_HOST'),
                    port: configService.get<string>(`${stage}_DB_PORT`),
                    username: configService.get<string>(`${stage}_DB_USER`),
                    password: configService.get<string>(`${stage}_DB_PASSWORD`),
                    database: configService.get<string>(`${stage}_DB_NAME`),
                    entities: [User, Song, Progression, Chord],
                    synchronize: stage === Stage.TEST || stage === Stage.DEV,
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
