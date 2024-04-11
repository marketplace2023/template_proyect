import { Module } from '@nestjs/common';
import { ReportLayoutController } from './report-layout.controller';
import { ReportLayoutService } from './report-layout.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportLayout } from './entities/report-layout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportLayout])],
  controllers: [ReportLayoutController],
  providers: [ReportLayoutService],
})
export class ReportLayoutModule {}
