import { Injectable, Response } from '@nestjs/common';
import { DomainSearch } from './entities/domain-search.entity';
import { DomainBreachDto } from './dto/domain-breach.dto';

@Injectable()
export class DomainSearchRepository {
  async findDomainBreachEmails(domain: string): Promise<Record<string, string[]>> {
    return {
        "alias1": [
         "Adobe"
        ],
        "alias2": [
          "Adobe",
          "Gawker",
          "Stratfor"
        ],
        "alias3": [
          "AshleyMadison"
        ]
      }
    let response: Response = await fetch(`https://haveibeenpwned.com/api/v3/breaches?domain=${domain}`, {
        method: 'GET',
        headers: {
            'hibp-api-key': process.env.hidpKey
        }
    });
    let body = await response.json();
    return body;
  }

  async findBreachByName(breachName: string): Promise<DomainBreachDto> {
    let response: Response = await fetch(`https://haveibeenpwned.com/api/v3/breach/${breachName}`, {
        method: 'GET'
    });
    let body = await response.json();
    return body;
  }
}
