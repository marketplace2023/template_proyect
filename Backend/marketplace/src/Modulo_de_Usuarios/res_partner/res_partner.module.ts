import { Module } from '@nestjs/common';
import { ResPartnerService } from './res_partner.service';
import { ResPartnerController } from './res_partner.controller';

@Module({
  controllers: [ResPartnerController],
  providers: [ResPartnerService],
})
export class ResPartnerModule {}
