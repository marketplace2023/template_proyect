import { Module } from '@nestjs/common';
import { ResGroupsController } from './res-groups.controller';
import { ResGroupsService } from './res-groups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResGroups } from './entities/res-groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResGroups])],
  controllers: [ResGroupsController],
  providers: [ResGroupsService],
})
export class ResGroupsModule {}
