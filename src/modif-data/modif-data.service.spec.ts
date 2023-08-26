import { Test, TestingModule } from '@nestjs/testing';
import { ModifDataService } from './modif-data.service';

describe('ModifDataService', () => {
  let service: ModifDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModifDataService],
    }).compile();

    service = module.get<ModifDataService>(ModifDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
