import { Module } from '@nestjs/common';
import { ProgressionsService } from './progressions.service';
import { ProgressionsController } from './progressions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Progression } from './progression.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Progression])],
    providers: [ProgressionsService],
    controllers: [ProgressionsController],
})
export class ProgressionsModule {}
