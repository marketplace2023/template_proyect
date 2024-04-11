import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsers } from './entities/res-users.entity';
import { ResUsersController } from './res-users.controller';
import { ResUsersService } from './res-users.service';
import { ResGroups } from '../res-groups/entities/res-groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResUsers, ResGroups])],
  controllers: [ResUsersController],
  providers: [ResUsersService],
})
export class ResUsersModule {}
