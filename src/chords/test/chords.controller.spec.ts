import { Test, TestingModule } from '@nestjs/testing';
import { ChordsController } from './chords.controller';

describe('ChordsController', () => {
  let controller: ChordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChordsController],
    }).compile();

    controller = module.get<ChordsController>(ChordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
