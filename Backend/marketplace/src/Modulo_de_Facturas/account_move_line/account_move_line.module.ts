import { Module } from '@nestjs/common';
import { AccountMoveLineService } from './account_move_line.service';
import { AccountMoveLineController } from './account_move_line.controller';

@Module({
  controllers: [AccountMoveLineController],
  providers: [AccountMoveLineService],
})
export class AccountMoveLineModule {}
