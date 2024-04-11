import { Module } from '@nestjs/common';
import { AccountReportLineController } from './account-report-line.controller';
import { AccountReportLineService } from './account-report-line.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountReportLine } from './entities/account-report-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountReportLine])],
  controllers: [AccountReportLineController],
  providers: [AccountReportLineService],
})
export class AccountReportLineModule {}
