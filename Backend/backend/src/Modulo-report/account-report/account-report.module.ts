import { Module } from '@nestjs/common';
import { AccountReportController } from './account-report.controller';
import { AccountReportService } from './account-report.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountReport } from './entities/account-report.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountReport])],
  controllers: [AccountReportController],
  providers: [AccountReportService],
})
export class AccountReportModule {}
