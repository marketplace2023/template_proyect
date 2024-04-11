import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountMoveLineController } from './account-move-line.controller';
import { AccountMoveLineService } from './account-move-line.service';
import { AccountMoveLine } from './entities/account-move-line.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountMoveLine])],
  controllers: [AccountMoveLineController],
  providers: [AccountMoveLineService],
})
export class AccountMoveLineModule {}
