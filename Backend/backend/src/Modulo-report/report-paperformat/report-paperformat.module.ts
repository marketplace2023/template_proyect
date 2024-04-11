import { Module } from '@nestjs/common';
import { ReportPaperformatService } from './report-paperformat.service';
import { ReportPaperformatController } from './report-paperformat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportPaperformat } from './entities/report-paperformat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReportPaperformat])],
  controllers: [ReportPaperformatController],
  providers: [ReportPaperformatService],
})
export class ReportPaperformatModule {}
