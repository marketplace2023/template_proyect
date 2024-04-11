import { Module } from '@nestjs/common';
import { ResUsersSettingsVolumesController } from './res-users-settings-volumes.controller';
import { ResUsersSettingsVolumesService } from './res-users-settings-volumes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResUsersSettingsVolumes } from './entities/res-users-settings-volumes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResUsersSettingsVolumes])],
  controllers: [ResUsersSettingsVolumesController],
  providers: [ResUsersSettingsVolumesService],
})
export class ResUsersSettingsVolumesModule {}
