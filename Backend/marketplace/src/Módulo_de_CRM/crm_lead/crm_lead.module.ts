import { Module } from '@nestjs/common';
import { CrmLeadService } from './crm_lead.service';
import { CrmLeadController } from './crm_lead.controller';

@Module({
  controllers: [CrmLeadController],
  providers: [CrmLeadService],
})
export class CrmLeadModule {}
