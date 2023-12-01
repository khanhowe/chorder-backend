import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Chord } from './chord.entity';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChordsRepository {
    private logger = new Logger('ChordsRepository');

    constructor(private entityManager: EntityManager) {}

    async createChord(
        createChordDto: CreateChordDto,
        user: User,
    ): Promise<Chord> {
        this.logger.log(`Creating chord: ${JSON.stringify(createChordDto)}`);
        const { name, description, notes } = createChordDto;
        const chord = this.entityManager.create(Chord, {
            name,
            description,
            notes,
            user,
        });

        await this.entityManager.save(chord);
        return chord;
    }

    async getChordById(id: string, user: User): Promise<Chord> {
        this.logger.log(`Getting chord by id: "${id}"`);
        const found = await this.entityManager.findOne(Chord, {
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
