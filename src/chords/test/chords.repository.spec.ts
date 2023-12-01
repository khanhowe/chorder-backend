import { Test } from '@nestjs/testing';
import { ChordsRepository } from '../chords.repository';
import { DatabaseModule } from '../../database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chord } from '../chord.entity';
import { DataSource, QueryRunner } from 'typeorm';
import { Progression } from '../../progressions/progression.entity';
import { User } from '../../auth/user.entity';
import { mockCMajorTriadChord } from './mocks/chords.mock';
import { seedUsers } from '../../database/seeds/user.seeder';
import { CreateChordDto } from '../dto/create-chord.dto';

describe('ChordsRepository', () => {
    let chordsRepository: ChordsRepository;
    let dataSource: DataSource;
    let user: User;
    let queryRunner: QueryRunner;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [
                DatabaseModule,
                TypeOrmModule.forFeature([Chord, Progression, User]),
            ],
            providers: [ChordsRepository],
        }).compile();

        dataSource = module.get<DataSource>(DataSource);

        queryRunner = dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        user = await seedUsers(queryRunner.manager);
        chordsRepository = new ChordsRepository(queryRunner.manager);
    });

    afterEach(async () => {
        await queryRunner.rollbackTransaction();
        await queryRunner.release();
        await dataSource.destroy();
    });

    describe('createChord()', () => {
        it('Succefully create a chord and save it to the database', async () => {
            const createChordDto: CreateChordDto = {
                name: 'C Major Triad',
                description: 'A C major triad',
                notes: 'C4:E4:G4',
            };
            const savedChord = await chordsRepository.createChord(
                createChordDto,
                user,
            );
            expect(savedChord).toMatchObject(mockCMajorTriadChord);
        });
    });
});
