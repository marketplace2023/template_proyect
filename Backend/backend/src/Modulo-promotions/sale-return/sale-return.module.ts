import { Module } from '@nestjs/common';
import { SaleReturnController } from './sale-return.controller';
import { SaleReturnService } from './sale-return.service';
import { SaleReturn } from './entities/sale-return.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SaleReturn])],
  controllers: [SaleReturnController],
  providers: [SaleReturnService],
})
export class SaleReturnModule {}
