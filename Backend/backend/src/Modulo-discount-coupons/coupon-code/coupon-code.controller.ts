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
import { UpdatedCouponCodeDto } from './dto/updated-coupon-code.dto';
import { CouponCode } from './entities/coupon-code.entity';
import { CreateCouponCodeDto } from './dto/created-coupon-code.dto';
import { CouponCodeService } from './coupon-code.service';
@Controller('coupon-code')
export class CouponCodeController {
  constructor(private readonly couponCodeService: CouponCodeService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<CouponCode[]> {
    return await this.couponCodeService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaCouponCodeDto: CreateCouponCodeDto,
  ): Promise<CouponCode> {
    return await this.couponCodeService.create(createaCouponCodeDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CouponCode> {
    return await this.couponCodeService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedCouponCodeDto: UpdatedCouponCodeDto,
    @Param('id') id: string,
  ): Promise<CouponCode> {
    return await this.couponCodeService.updated(+id, updatedCouponCodeDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.couponCodeService.deleted(+id);
  }
}
