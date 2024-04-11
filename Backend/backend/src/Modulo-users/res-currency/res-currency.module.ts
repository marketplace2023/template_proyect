import { Module } from '@nestjs/common';
import { ResCurrencyController } from './res-currency.controller';
import { ResCurrencyService } from './res-currency.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCurrency } from './entities/res-currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCurrency])],
  controllers: [ResCurrencyController],
  providers: [ResCurrencyService],
})
export class ResCurrencyModule {}
