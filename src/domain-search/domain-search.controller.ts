import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { DomainSearchService } from './domain-search.service';

@Controller('domain-search')
export class DomainSearchController {
  constructor(private readonly domainSearchService: DomainSearchService) {}

  @Get(':domain')
  findOne(@Param('domain') domain: string) {
    const domainRegex = /^([\w\d\-_]+)+(\.[\d\w\-\_]+)+$/;
    if (!domainRegex.test(domain)) {
      throw new BadRequestException('Invalid domain format.');
    }
    return this.domainSearchService.findByDomain(domain);
  }
}
