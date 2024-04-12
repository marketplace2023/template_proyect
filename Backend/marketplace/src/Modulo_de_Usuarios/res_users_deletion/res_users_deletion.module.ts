import { Module } from '@nestjs/common';
import { ResUsersDeletionService } from './res_users_deletion.service';
import { ResUsersDeletionController } from './res_users_deletion.controller';

@Module({
  controllers: [ResUsersDeletionController],
  providers: [ResUsersDeletionService],
})
export class ResUsersDeletionModule {}
