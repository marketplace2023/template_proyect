import { Module } from '@nestjs/common';
import { SaleCommissionController } from './sale-commission.controller';
import { SaleCommissionService } from './sale-commission.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleCommission } from './entities/sale-commission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleCommission])],
  controllers: [SaleCommissionController],
  providers: [SaleCommissionService],
})
export class SaleCommissionModule {}
