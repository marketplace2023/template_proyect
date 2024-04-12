import { Module } from '@nestjs/common';
import { IrModelAccesService } from './ir_model_acces.service';
import { IrModelAccesController } from './ir_model_acces.controller';

@Module({
  controllers: [IrModelAccesController],
  providers: [IrModelAccesService],
})
export class IrModelAccesModule {}
