import { Module } from '@nestjs/common';
import { SaleReportController } from './sale-report.controller';
import { SaleReportService } from './sale-report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleReport } from './entities/sale-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleReport])],
  controllers: [SaleReportController],
  providers: [SaleReportService],
})
export class SaleReportModule {}
