import { Test, TestingModule } from '@nestjs/testing';
import { DomainSearchService } from './domain-search.service';

describe('DomainSearchService', () => {
  let service: DomainSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DomainSearchService],
    }).compile();

    service = module.get<DomainSearchService>(DomainSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
