import { Module } from '@nestjs/common';
import { DomainSearchService } from './domain-search.service';
import { DomainSearchController } from './domain-search.controller';
import { DomainSearchRepository } from './domain-search.repository';

@Module({
  controllers: [DomainSearchController],
  providers: [DomainSearchService, DomainSearchRepository],
})
export class DomainSearchModule {}
