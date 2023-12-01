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
import { seedChord } from '../../database/seeds/chord.seeder';
import { v4 } from 'uuid';
import { NotFoundException } from '@nestjs/common';

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
        it('Should succefully create a chord and save it to the database', async () => {
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

        it('Should throw an error if required fields of dto are missing', async () => {
            const invalidDto = { name: 'Incomplete chord object' };
            await expect(
                // @ts-expect-error: Passing an invalid dto for error testing.
                chordsRepository.createChord(invalidDto, user),
            ).rejects.toThrow();
        });
    });

    describe('getChordById()', () => {
        it('Should successfully get a pre-existing chord from the database', async () => {
            const existingChord = await seedChord(queryRunner.manager, {
                user,
            });

            const foundChord = await chordsRepository.getChordById(
                existingChord.id,
                user,
            );
            expect(foundChord.name).toEqual(existingChord.name);
        });

        it('Should fail to find chord and return NotFoundException', async () => {
            await expect(
                chordsRepository.getChordById(v4(), user),
            ).rejects.toThrow(NotFoundException);
        });
    });
});
