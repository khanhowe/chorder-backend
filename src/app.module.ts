import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ChordsModule } from './chords/chords.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { ProgressionsModule } from './progressions/progressions.module';
import { SongsModule } from './songs/songs.module';
import { DatabaseModule } from './database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            validationSchema: configValidationSchema,
            isGlobal: true,
        }),
        DatabaseModule,
        ChordsModule,
        AuthModule,
        ProgressionsModule,
        SongsModule,
    ],
})
export class AppModule {}
