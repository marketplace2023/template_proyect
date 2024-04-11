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
import { SaleCouponReportService } from './sale-coupon-report.service';
import { SaleCouponReport } from './entities/sale-coupon-report.entity';
import { CreateSaleCouponReportDto } from './dto/created-sale-coupon-report.dto';
import { UpdatedSaleCouponReportDto } from './dto/updated-sale-coupon-report.dto';
@Controller('sale-coupon-report')
export class SaleCouponReportController {
  constructor(
    private readonly saleCouponReportService: SaleCouponReportService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCouponReport[]> {
    return await this.saleCouponReportService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaSaleCouponReportDto: CreateSaleCouponReportDto,
  ): Promise<SaleCouponReport> {
    return await this.saleCouponReportService.create(
      createaSaleCouponReportDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCouponReport> {
    return await this.saleCouponReportService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedSaleCouponReportDto: UpdatedSaleCouponReportDto,
    @Param('id') id: string,
  ): Promise<SaleCouponReport> {
    return await this.saleCouponReportService.updated(
      +id,
      updatedSaleCouponReportDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponReportService.deleted(+id);
  }
}
