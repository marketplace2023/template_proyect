import { Module } from '@nestjs/common';
import { ResUsersLogService } from './res_users_log.service';
import { ResUsersLogController } from './res_users_log.controller';

@Module({
  controllers: [ResUsersLogController],
  providers: [ResUsersLogService],
})
export class ResUsersLogModule {}
