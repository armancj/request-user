import { Test, TestingModule } from '@nestjs/testing';
import { EditorialController } from './editorial.controller';
import { EditorialService } from './editorial.service';

describe('EditorialController', () => {
  let controller: EditorialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EditorialController],
      providers: [EditorialService],
    }).compile();

    controller = module.get<EditorialController>(EditorialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
