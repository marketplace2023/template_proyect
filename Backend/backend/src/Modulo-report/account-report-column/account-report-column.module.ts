import { Module } from '@nestjs/common';
import { AccountReportColumnController } from './account-report-column.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountReportColumn } from './entities/account-report-column.entity';
import { AccountReportColumnService } from './account-report-column.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountReportColumn])],
  controllers: [AccountReportColumnController],
  providers: [AccountReportColumnService],
})
export class AccountReportColumnModule {}
