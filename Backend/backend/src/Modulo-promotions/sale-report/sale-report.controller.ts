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
import { SaleReportService } from './sale-report.service';
import { SaleReport } from './entities/sale-report.entity';
import { CreateSaleReportDto } from './dto/created-sale-report.dto';
import { UpdatedSaleReportDto } from './dto/updated-sale-report.dto';
@Controller('sale-report')
export class SaleReportController {
  constructor(private readonly saleReportService: SaleReportService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleReport[]> {
    return await this.saleReportService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleReportDto: CreateSaleReportDto,
  ): Promise<SaleReport> {
    return await this.saleReportService.create(createaSaleReportDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleReport> {
    return await this.saleReportService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleReportDto: UpdatedSaleReportDto,
    @Param('id') id: string,
  ): Promise<SaleReport> {
    return await this.saleReportService.updated(+id, updatedSaleReportDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleReportService.deleted(+id);
  }
}
