import { Module } from '@nestjs/common';
import { ResCompanyController } from './res-company.controller';
import { ResCompanyService } from './res-company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResCompany } from './entities/res-company.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ResCompany])],
  controllers: [ResCompanyController],
  providers: [ResCompanyService],
})
export class ResCompanyModule {}
