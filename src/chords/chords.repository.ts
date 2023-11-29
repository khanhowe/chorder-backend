import { Injectable, Logger } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { Chord } from './chord.entity';
import { InjectDataSource } from '@nestjs/typeorm';

@Injectable()
export class ChordsRepository extends Repository<Chord> {
    private logger = new Logger();

    constructor(@InjectDataSource() dataSource: DataSource) {
        super(Chord as EntityTarget<Chord>, dataSource.createEntityManager());
    }

    async createChord(): Promise<Chord> {
        const chord = this.create({
            name: 'CM',
            description: 'root chord',
            notes: 'C4:E4:G4',
        });

        await this.save(chord);
        return chord;
    }
}
