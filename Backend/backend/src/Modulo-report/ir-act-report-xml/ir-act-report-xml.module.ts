import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IrActReportXmlService } from './ir-act-report-xml.service';
import { IrActReportXmlController } from './ir-act-report-xml.controller';
import { IrActReportXml } from './entities/ir-act-report-xml.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IrActReportXml])],
  controllers: [IrActReportXmlController],
  providers: [IrActReportXmlService],
})
export class IrActReportXmlModule {}
