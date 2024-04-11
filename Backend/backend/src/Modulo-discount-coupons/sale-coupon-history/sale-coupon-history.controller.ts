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
import { SaleCouponHistoryService } from './sale-coupon-history.service';
import { SaleCouponHistory } from './entity/sale-coupon-history.entity';
import { CreateSaleCouponHistoryDto } from './dto/created-sale-coupon-history.dto';
import { UpdatedSaleCouponHistoryDto } from './dto/updated-sale-coupon-history.dto';
@Controller('sale-coupon-history')
export class SaleCouponHistoryController {
  constructor(
    private readonly saleCouponHistoryService: SaleCouponHistoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCouponHistory[]> {
    return await this.saleCouponHistoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaSaleCouponHistoryDto: CreateSaleCouponHistoryDto,
  ): Promise<SaleCouponHistory> {
    return await this.saleCouponHistoryService.create(
      createaSaleCouponHistoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCouponHistory> {
    return await this.saleCouponHistoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedSaleCouponHistoryDto: UpdatedSaleCouponHistoryDto,
    @Param('id') id: string,
  ): Promise<SaleCouponHistory> {
    return await this.saleCouponHistoryService.updated(
      +id,
      updatedSaleCouponHistoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponHistoryService.deleted(+id);
  }
}
