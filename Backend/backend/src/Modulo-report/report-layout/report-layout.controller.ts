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
import { ReportLayoutService } from './report-layout.service';
import { ReportLayout } from './entities/report-layout.entity';
import { CreateReportLayoutDto } from './dto/created-report-layout.dto';
import { UpdatedReportLayoutDto } from './dto/updated-report-layout.dto';
@Controller('report-layout')
export class ReportLayoutController {
  constructor(private readonly reportLayoutService: ReportLayoutService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ReportLayout[]> {
    return await this.reportLayoutService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaReportLayoutDto: CreateReportLayoutDto,
  ): Promise<ReportLayout> {
    return await this.reportLayoutService.create(createaReportLayoutDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ReportLayout> {
    return await this.reportLayoutService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedReportLayoutDto: UpdatedReportLayoutDto,
    @Param('id') id: string,
  ): Promise<ReportLayout> {
    return await this.reportLayoutService.updated(+id, updatedReportLayoutDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.reportLayoutService.deleted(+id);
  }
}
