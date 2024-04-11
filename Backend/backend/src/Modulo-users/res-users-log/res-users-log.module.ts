import { Module } from '@nestjs/common';
import { ResUsersLogController } from './res-users-log.controller';
import { ResUsersLogService } from './res-users-log.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsersLog } from './entities/res-users-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResUsersLog])],
  controllers: [ResUsersLogController],
  providers: [ResUsersLogService],
})
export class ResUsersLogModule {}
