import { Module } from '@nestjs/common';
import { CrmTagService } from './crm_tag.service';
import { CrmTagController } from './crm_tag.controller';

@Module({
  controllers: [CrmTagController],
  providers: [CrmTagService],
})
export class CrmTagModule {}
