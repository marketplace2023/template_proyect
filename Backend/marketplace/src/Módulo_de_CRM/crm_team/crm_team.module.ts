import { Module } from '@nestjs/common';
import { CrmTeamService } from './crm_team.service';
import { CrmTeamController } from './crm_team.controller';

@Module({
  controllers: [CrmTeamController],
  providers: [CrmTeamService],
})
export class CrmTeamModule {}
