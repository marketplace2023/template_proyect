import { Module } from '@nestjs/common';
import { IrModelService } from './ir_model.service';
import { IrModelController } from './ir_model.controller';

@Module({
  controllers: [IrModelController],
  providers: [IrModelService],
})
export class IrModelModule {}
