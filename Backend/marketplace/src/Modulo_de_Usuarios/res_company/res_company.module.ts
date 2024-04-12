import { Module } from '@nestjs/common';
import { ResCompanyService } from './res_company.service';
import { ResCompanyController } from './res_company.controller';

@Module({
  controllers: [ResCompanyController],
  providers: [ResCompanyService],
})
export class ResCompanyModule {}
