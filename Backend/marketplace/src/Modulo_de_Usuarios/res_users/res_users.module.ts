import { Module } from '@nestjs/common';
import { ResUsersService } from './res_users.service';
import { ResUsersController } from './res_users.controller';

@Module({
  controllers: [ResUsersController],
  providers: [ResUsersService],
})
export class ResUsersModule {}
