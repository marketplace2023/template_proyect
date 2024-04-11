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
import { ReportPaperformatService } from './report-paperformat.service';
import { ReportPaperformat } from './entities/report-paperformat.entity';
import { CreateReportPaperformatDto } from './dto/create-report-paperformat.dto';
import { UpdatedReportPaperformatDto } from './dto/updated-report-paperformat.dto';
@Controller('report-paperformat')
export class ReportPaperformatController {
  constructor(
    private readonly reportPaperformatService: ReportPaperformatService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ReportPaperformat[]> {
    return await this.reportPaperformatService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaReportPaperformatDto: CreateReportPaperformatDto,
  ): Promise<ReportPaperformat> {
    return await this.reportPaperformatService.create(
      createaReportPaperformatDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ReportPaperformat> {
    return await this.reportPaperformatService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedReportPaperformatDto: UpdatedReportPaperformatDto,
    @Param('id') id: string,
  ): Promise<ReportPaperformat> {
    return await this.reportPaperformatService.updated(
      +id,
      updatedReportPaperformatDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.reportPaperformatService.deleted(+id);
  }
}
