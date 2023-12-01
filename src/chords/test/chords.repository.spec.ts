import { Test } from '@nestjs/testing';
import { ChordsRepository } from '../chords.repository';
import { DatabaseModule } from '../../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chord } from '../chord.entity';
import { DataSource } from 'typeorm';
import { Progression } from '../../progressions/progression.entity';
import { User } from '../../auth/user.entity';
import { CreateChordDto } from '../dto/create-chord.dto';

describe('ChordsRepository', () => {
    let chordsRepository: ChordsRepository;
    let dataSource: DataSource;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                DatabaseModule,
                TypeOrmModule.forFeature([Chord, Progression, User]),
            ],
            providers: [ChordsRepository],
        }).compile();

        chordsRepository = module.get<ChordsRepository>(ChordsRepository);
        dataSource = module.get<DataSource>(DataSource);
    });

    afterEach(async () => {
        await dataSource.query(
            'TRUNCATE TABLE chord RESTART IDENTITY CASCADE;',
        );
    });

    describe('getChord()', () => {
        it('Succefully create a chord and save it to the database', async () => {
            const input: CreateChordDto = {
                name: 'test',
                description: 'testDescription',
                notes: 'test:test:test',
            };
            const savedChord = await chordsRepository.createChord(input);
            expect(savedChord).toMatchObject(input);
        });
    });
});
