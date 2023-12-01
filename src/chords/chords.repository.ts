import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { DataSource, EntityTarget, Repository } from 'typeorm';
import { Chord } from './chord.entity';
import { InjectDataSource } from '@nestjs/typeorm';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChordsRepository extends Repository<Chord> {
    private logger = new Logger();

    constructor(@InjectDataSource() dataSource: DataSource) {
        super(Chord as EntityTarget<Chord>, dataSource.createEntityManager());
    }

    async createChord(
        createChordDto: CreateChordDto,
        user: User,
    ): Promise<Chord> {
        const { name, description, notes } = createChordDto;
        const chord = this.create({
            name,
            description,
            notes,
            user,
        });

        await this.save(chord);
        return chord;
    }

    async getChordById(id: string, user: User): Promise<Chord> {
        const found = this.findOne({
            where: {
                id,
                user,
            },
        });

        if (!found) {
            throw new NotFoundException();
        }

        return found;
    }
}
