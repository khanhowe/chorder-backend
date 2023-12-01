import { Injectable, Logger } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { Chord } from './chord.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateChordDto } from './dto/create-chord.dto';

@Injectable()
export class ChordsRepository extends Repository<Chord> {
    private logger = new Logger();

    constructor(@InjectDataSource() dataSource: DataSource) {
        super(Chord as EntityTarget<Chord>, dataSource.createEntityManager());
    }

    async createChord(createChordDto: CreateChordDto): Promise<Chord> {
        const { name, description, notes } = createChordDto;
        const chord = this.create({
            name,
            description,
            notes,
        });

        await this.save(chord);
        return chord;
    }
}
