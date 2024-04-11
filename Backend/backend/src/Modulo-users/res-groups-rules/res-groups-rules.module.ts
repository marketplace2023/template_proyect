import { Module } from '@nestjs/common';
import { ResGroupsRulesController } from './res-groups-rules.controller';
import { ResGroupsRulesService } from './res-groups-rules.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResGroupsRules } from './entities/res-groups-rules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResGroupsRules])],
  controllers: [ResGroupsRulesController],
  providers: [ResGroupsRulesService],
})
export class ResGroupsRulesModule {}
