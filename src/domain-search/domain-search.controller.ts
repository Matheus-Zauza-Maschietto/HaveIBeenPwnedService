import { Controller, Get, Param } from '@nestjs/common';
import { DomainSearchService } from './domain-search.service';

@Controller('domain-search')
export class DomainSearchController {
  constructor(private readonly domainSearchService: DomainSearchService) {}

  @Get(':domain')
  findOne(@Param('domain') domain: string) {
    return this.domainSearchService.findByDomain(domain);
  }
}
