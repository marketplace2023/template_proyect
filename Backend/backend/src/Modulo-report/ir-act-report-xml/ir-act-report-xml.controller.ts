import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { IrActReportXmlService } from './ir-act-report-xml.service';
import { IrActReportXml } from './entities/ir-act-report-xml.entity';
import { CreateIrActReportXmlDto } from './dto/created-ir-act-report-xml.dto';
import { UpdatedIrActReportXmlDto } from './dto/updated-ir-act-report-xml.dto';
@Controller('ir-act-report-xml')
export class IrActReportXmlController {
  constructor(private readonly irActReportXmlService: IrActReportXmlService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<IrActReportXml[]> {
    return await this.irActReportXmlService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaIrActReportXmlDto: CreateIrActReportXmlDto,
  ): Promise<IrActReportXml> {
    return await this.irActReportXmlService.create(createaIrActReportXmlDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<IrActReportXml> {
    return await this.irActReportXmlService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedIrActReportXmlDto: UpdatedIrActReportXmlDto,
    @Param('id') id: string,
  ): Promise<IrActReportXml> {
    return await this.irActReportXmlService.updated(
      +id,
      updatedIrActReportXmlDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.irActReportXmlService.deleted(+id);
  }
}
