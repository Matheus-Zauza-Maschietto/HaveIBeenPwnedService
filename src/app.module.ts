import { Module } from '@nestjs/common';
import { DomainSearchModule } from './domain-search/domain-search.module';

@Module({
  imports: [DomainSearchModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
