import { Test } from '@nestjs/testing';
import { ChordsRepository } from '../chords.repository';
import { DatabaseModule } from '../../database/database.module';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Chord } from '../chord.entity';
import { DataSource, Repository } from 'typeorm';
import { Progression } from '../../progressions/progression.entity';
import { User } from '../../auth/user.entity';
import { mockUser } from '../../auth/test/mocks/user.mock';
import { mockCMajorTriadChord } from './mocks/chords.mock';

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

        const usersRepository = module.get<Repository<User>>(
            getRepositoryToken(User),
        );

        const testUser = usersRepository.create(mockUser);
        await usersRepository.save(testUser);

        chordsRepository = module.get<ChordsRepository>(ChordsRepository);
        dataSource = module.get<DataSource>(DataSource);
    });

    afterEach(async () => {
        await dataSource.query(
            'TRUNCATE TABLE chord RESTART IDENTITY CASCADE;',
        );
    });

    describe('createChord()', () => {
        it('Succefully create a chord and save it to the database', async () => {
            mockCMajorTriadChord.user = mockUser;
            const savedChord = await chordsRepository.createChord(
                mockCMajorTriadChord,
                mockUser,
            );
            expect(savedChord).toMatchObject(mockCMajorTriadChord);
        });
    });
});
