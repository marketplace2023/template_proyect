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
import { DiscountCouponHistory } from './entities/discount-coupon-history.entity';
import { CreateDiscountCouponHistoryDto } from './dto/created-discount-coupon-history.dto';
import { UpdatedDiscountCouponHistoryDto } from './dto/updated-discount-coupon-history.dto';
import { DiscountCouponHistoryService } from './discount-coupon-history.service';
@Controller('discount-coupon-history')
export class DiscountCouponHistoryController {
  constructor(
    private readonly discountCouponHistoryService: DiscountCouponHistoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DiscountCouponHistory[]> {
    return await this.discountCouponHistoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDiscountCouponHistoryDto: CreateDiscountCouponHistoryDto,
  ): Promise<DiscountCouponHistory> {
    return await this.discountCouponHistoryService.create(
      createaDiscountCouponHistoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiscountCouponHistory> {
    return await this.discountCouponHistoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDiscountCouponHistoryDto: UpdatedDiscountCouponHistoryDto,
    @Param('id') id: string,
  ): Promise<DiscountCouponHistory> {
    return await this.discountCouponHistoryService.updated(
      +id,
      updatedDiscountCouponHistoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.discountCouponHistoryService.deleted(+id);
  }
}
