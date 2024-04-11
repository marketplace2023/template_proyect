import { Module } from '@nestjs/common';
import { AccountBankStatementController } from './account-bank-statement.controller';
import { AccountBankStatementService } from './account-bank-statement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountBankStatement } from './entities/account-bank-statement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountBankStatement])],
  controllers: [AccountBankStatementController],
  providers: [AccountBankStatementService],
})
export class AccountBankStatementModule {}
