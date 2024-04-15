import { Module } from '@nestjs/common';
import { IrActWindowsService } from './ir_act_windows.service';
import { IrActWindowsController } from './ir_act_windows.controller';

@Module({
  controllers: [IrActWindowsController],
  providers: [IrActWindowsService],
})
export class IrActWindowsModule {}
