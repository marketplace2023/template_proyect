import { Module } from '@nestjs/common';
import { AccountAccountController } from './account-account.controller';
import { AccountAccountService } from './account-account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountAccount } from './entities/account-account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountAccount])],
  controllers: [AccountAccountController],
  providers: [AccountAccountService],
})
export class AccountAccountModule {}
