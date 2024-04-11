import { Module } from '@nestjs/common';
import { ResCurrencyRateController } from './res-currency-rate.controller';
import { ResCurrencyRateService } from './res-currency-rate.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCurrencyRate } from './entities/res-currency-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCurrencyRate])],
  controllers: [ResCurrencyRateController],
  providers: [ResCurrencyRateService],
})
export class ResCurrencyRateModule {}
