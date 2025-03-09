import { Injectable } from '@nestjs/common';
import { DomainSearch } from './entities/domain-search.entity';
import { DomainSearchRepository } from './domain-search.repository';
import { DomainBreachDto } from './dto/domain-breach.dto';

@Injectable()
export class DomainSearchService {
  constructor(private readonly domainSearchRepository: DomainSearchRepository) {}


  async findByDomain(domain: string): Promise<DomainSearch[]> {
    let domainBreachEmails: Record<string, string[]> = await this.domainSearchRepository.findDomainBreachEmails(domain);
    let distinctBreaches: string[] = this.getDistincBreachs(domainBreachEmails);
    let breachesInfos: DomainBreachDto[] = await this.getAllBreachesInfos(distinctBreaches);
    return this.getDomainSearches(domainBreachEmails, breachesInfos, domain);
  }

  getDistincBreachs(domainBreachEmails:  Record<string, string[]>): string[] {
    const breaches = [];
    for (const key in domainBreachEmails) {
        const element = domainBreachEmails[key];
        breaches.push(...element);
    }

    return breaches.filter((v, i, a) => a.indexOf(v) === i);
  }

  async getAllBreachesInfos(breaches: string[]): Promise<DomainBreachDto[]> {
    const breachesInfos = [];
    for (const breach of breaches) {
        let breachInfo = await this.domainSearchRepository.findBreachByName(breach);
        breachesInfos.push(breachInfo);
    }

    return breachesInfos;
  }

  getDomainSearches(domainEmails: Record<string, string[]>, domainBreaches: DomainBreachDto[], searchDomain: string): DomainSearch[] {
    const searches = [];
    for (const key in domainEmails) {
      const breachesNames = domainEmails[key];
      for (const breachName of breachesNames) {
        const breach = domainBreaches.find(breach => breach.Name === breachName);
        searches.push(new DomainSearch(breach, `${key}@${searchDomain}`));
      }
    }
    return searches;
  }
}
