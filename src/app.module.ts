import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChordsModule } from './chords/chords.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configValidationSchema } from './config.schema';
import { ProgressionsModule } from './progressions/progressions.module';
import { SongsModule } from './songs/songs.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: [`.env.stage.${process.env.STAGE}`],
            validationSchema: configValidationSchema,
            isGlobal: true,
        }),
        ChordsModule,
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                type: configService.get<any>('DATABASE_TYPE'),
                host: configService.get<string>('DATABASE_HOST'),
                port: configService.get<number>('DATABASE_PORT'),
                username: configService.get<string>('DATABASE_USERNAME'),
                password: configService.get<string>('DATABASE_PASSWORD'),
                database: configService.get<string>('DATABASE_NAME'),
                autoLoadEntities: true,
                synchronize: true,
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        ProgressionsModule,
        SongsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
