import { Test, TestingModule } from '@nestjs/testing';
import { ChordsService } from './chords.service';

describe('ChordsService', () => {
  let service: ChordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChordsService],
    }).compile();

    service = module.get<ChordsService>(ChordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
