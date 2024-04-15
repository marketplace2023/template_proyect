import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponRewardService } from './sale_coupon_reward.service';
import { CreateSaleCouponRewardDto } from './dto/create-sale_coupon_reward.dto';
import { UpdateSaleCouponRewardDto } from './dto/update-sale_coupon_reward.dto';

@Controller('sale-coupon-reward')
export class SaleCouponRewardController {
  constructor(
    private readonly saleCouponRewardService: SaleCouponRewardService,
  ) {}

  @Post()
  create(@Body() createSaleCouponRewardDto: CreateSaleCouponRewardDto) {
    return this.saleCouponRewardService.create(createSaleCouponRewardDto);
  }

  @Get()
  findAll() {
    return this.saleCouponRewardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponRewardService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponRewardDto: UpdateSaleCouponRewardDto,
  ) {
    return this.saleCouponRewardService.update(+id, updateSaleCouponRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponRewardService.remove(+id);
  }
}
//definicion-recompensas-cupones                                           # (sale.coupon.reward)
//# Define las recompensas asociadas con los cupones de descuento, como descuentos porcentuales, envío gratuito, entre otros.
