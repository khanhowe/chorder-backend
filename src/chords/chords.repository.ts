import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { Chord } from './chord.entity';
import { CreateChordDto } from './dto/create-chord.dto';
import { User } from 'src/auth/user.entity';

@Injectable()
export class ChordsRepository {
    private logger = new Logger();

    constructor(private entityManager: EntityManager) {}

    async createChord(
        createChordDto: CreateChordDto,
        user: User,
    ): Promise<Chord> {
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
        const found = this.entityManager.findOne(Chord, {
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
