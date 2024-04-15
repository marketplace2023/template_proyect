import { Module } from '@nestjs/common';
import { CrmStageService } from './crm_stage.service';
import { CrmStageController } from './crm_stage.controller';

@Module({
  controllers: [CrmStageController],
  providers: [CrmStageService],
})
export class CrmStageModule {}
