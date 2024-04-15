import { Module } from '@nestjs/common';
import { IrActServerService } from './ir_act_server.service';
import { IrActServerController } from './ir_act_server.controller';

@Module({
  controllers: [IrActServerController],
  providers: [IrActServerService],
})
export class IrActServerModule {}
