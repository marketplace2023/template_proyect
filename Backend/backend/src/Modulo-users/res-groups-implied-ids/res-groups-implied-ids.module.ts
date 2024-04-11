import { Module } from '@nestjs/common';
import { ResGroupsImpliedIdsController } from './res-groups-implied-ids.controller';
import { ResGroupsImpliedIdsService } from './res-groups-implied-ids.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResGroupsImpliedIds } from './entities/res-groups-implied-ids.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResGroupsImpliedIds])],
  controllers: [ResGroupsImpliedIdsController],
  providers: [ResGroupsImpliedIdsService],
})
export class ResGroupsImpliedIdsModule {}
