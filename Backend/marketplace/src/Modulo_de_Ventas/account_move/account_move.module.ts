import { Module } from '@nestjs/common';
import { AccountMoveService } from './account_move.service';
import { AccountMoveController } from './account_move.controller';

@Module({
  controllers: [AccountMoveController],
  providers: [AccountMoveService],
})
export class AccountMoveModule {}
