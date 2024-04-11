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
import { SaleCoupon } from './entities/sale-coupon.entity';
import { SaleCouponService } from './sale-coupon.service';
import { CreateSaleCouponDto } from './dto/create-sale-coupon.dto';
import { UpdatedSaleCouponDto } from './dto/updated-sale-coupon.dto';
@Controller('sale-coupon')
export class SaleCouponController {
  constructor(private readonly saleCouponService: SaleCouponService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<SaleCoupon[]> {
    return await this.saleCouponService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaSaleCouponDto: CreateSaleCouponDto,
  ): Promise<SaleCoupon> {
    return await this.saleCouponService.create(createaSaleCouponDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SaleCoupon> {
    return await this.saleCouponService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedSaleCouponDto: UpdatedSaleCouponDto,
    @Param('id') id: string,
  ): Promise<SaleCoupon> {
    return await this.saleCouponService.updated(+id, updatedSaleCouponDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.saleCouponService.deleted(+id);
  }
}
