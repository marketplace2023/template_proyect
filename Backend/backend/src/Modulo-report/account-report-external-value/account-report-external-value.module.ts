import { Module } from '@nestjs/common';
import { AccountReportExternalValueController } from './account-report-external-value.controller';
import { AccountReportExternalValueService } from './account-report-external-value.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountReportExternalValue } from './entities/account-report-external-value.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountReportExternalValue])],
  controllers: [AccountReportExternalValueController],
  providers: [AccountReportExternalValueService],
})
export class AccountReportExternalValueModule {}
