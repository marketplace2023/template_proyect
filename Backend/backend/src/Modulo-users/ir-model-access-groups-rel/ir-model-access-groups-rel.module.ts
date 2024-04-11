import { Module } from '@nestjs/common';
import { IrModelAccessGroupsRelController } from './ir-model-access-groups-rel.controller';
import { IrModelAccessGroupsRelService } from './ir-model-access-groups-rel.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrModelAccessGroupsRel } from './entities/ir-model-access-groups-rel.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IrModelAccessGroupsRel])],
  controllers: [IrModelAccessGroupsRelController],
  providers: [IrModelAccessGroupsRelService],
})
export class IrModelAccessGroupsRelModule {}
