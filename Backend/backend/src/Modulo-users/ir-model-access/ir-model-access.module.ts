import { Module } from '@nestjs/common';
import { IrModelAccessController } from './ir-model-access.controller';
import { IrModelAccessService } from './ir-model-access.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrModelAccess } from './entities/ir-model-access.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IrModelAccess])],
  controllers: [IrModelAccessController],
  providers: [IrModelAccessService],
})
export class IrModelAccessModule {}
