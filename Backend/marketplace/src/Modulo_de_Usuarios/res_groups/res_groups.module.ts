import { Module } from '@nestjs/common';
import { ResGroupsService } from './res_groups.service';
import { ResGroupsController } from './res_groups.controller';

@Module({
  controllers: [ResGroupsController],
  providers: [ResGroupsService],
})
export class ResGroupsModule {}
