import { Module } from '@nestjs/common';
import { DomainSearchModule } from './domain-search/domain-search.module';
import { DomainSearchController } from './domain-search/domain-search.controller';

@Module({
  imports: [DomainSearchModule],
  controllers: [DomainSearchController],
  providers: [],
})
export class AppModule {}
