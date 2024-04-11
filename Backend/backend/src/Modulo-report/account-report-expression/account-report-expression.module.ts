import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountReportExpression } from './entities/account-report-expression.entity';
import { AccountReportExpressionController } from './account-report-expression.controller';
import { AccountReportExpressionService } from './account-report-expression.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountReportExpression])],
  controllers: [AccountReportExpressionController],
  providers: [AccountReportExpressionService],
})
export class AccountReportExpressionModule {}
