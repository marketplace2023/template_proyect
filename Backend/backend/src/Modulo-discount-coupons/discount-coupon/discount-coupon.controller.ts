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
import { DiscountCouponService } from './discount-coupon.service';
import { DiscountCoupon } from './entities/discount-coupon.entity';
import { CreateDiscountCouponDto } from './dto/created-discount-coupon.dto';
import { UpdatedDiscountCouponDto } from './dto/updated-discount-coupon.dto';
@Controller('discount-coupon')
export class DiscountCouponController {
  constructor(private readonly discountCouponService: DiscountCouponService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DiscountCoupon[]> {
    return await this.discountCouponService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDiscountCouponDto: CreateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    return await this.discountCouponService.create(createaDiscountCouponDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiscountCoupon> {
    return await this.discountCouponService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDiscountCouponDto: UpdatedDiscountCouponDto,
    @Param('id') id: string,
  ): Promise<DiscountCoupon> {
    return await this.discountCouponService.updated(
      +id,
      updatedDiscountCouponDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.discountCouponService.deleted(+id);
  }
}
