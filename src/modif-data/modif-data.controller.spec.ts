import { Test, TestingModule } from '@nestjs/testing';
import { ModifDataController } from './modif-data.controller';

describe('ModifDataController', () => {
  let controller: ModifDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModifDataController],
    }).compile();

    controller = module.get<ModifDataController>(ModifDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
