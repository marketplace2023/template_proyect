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
import { DiscountCouponLineService } from './discount-coupon-line.service';
import { DiscountCouponLine } from './entities/discount-coupon-line.entity';
import { CreateDiscountCouponLineDto } from './dto/created-discount-coupon-line.dto';
import { UpdatedDiscountCouponLineDto } from './dto/updated-discount-coupon-line.dto';
@Controller('discount-coupon-line')
export class DiscountCouponLineController {
  constructor(
    private readonly discountCouponLineService: DiscountCouponLineService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<DiscountCouponLine[]> {
    return await this.discountCouponLineService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaDiscountCouponLineDto: CreateDiscountCouponLineDto,
  ): Promise<DiscountCouponLine> {
    return await this.discountCouponLineService.create(
      createaDiscountCouponLineDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<DiscountCouponLine> {
    return await this.discountCouponLineService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedDiscountCouponLineDto: UpdatedDiscountCouponLineDto,
    @Param('id') id: string,
  ): Promise<DiscountCouponLine> {
    return await this.discountCouponLineService.updated(
      +id,
      updatedDiscountCouponLineDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.discountCouponLineService.deleted(+id);
  }
}
