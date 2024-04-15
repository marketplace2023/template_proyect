import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SaleCouponValidationService } from './sale_coupon_validation.service';
import { CreateSaleCouponValidationDto } from './dto/create-sale_coupon_validation.dto';
import { UpdateSaleCouponValidationDto } from './dto/update-sale_coupon_validation.dto';

@Controller('sale-coupon-validation')
export class SaleCouponValidationController {
  constructor(
    private readonly saleCouponValidationService: SaleCouponValidationService,
  ) {}

  @Post()
  create(@Body() createSaleCouponValidationDto: CreateSaleCouponValidationDto) {
    return this.saleCouponValidationService.create(
      createSaleCouponValidationDto,
    );
  }

  @Get()
  findAll() {
    return this.saleCouponValidationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleCouponValidationService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSaleCouponValidationDto: UpdateSaleCouponValidationDto,
  ) {
    return this.saleCouponValidationService.update(
      +id,
      updateSaleCouponValidationDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleCouponValidationService.remove(+id);
  }
}
//validacion-cupones                                                   # (sale.coupon.validation)
//# Administra la validación y verificación de los cupones durante el proceso de compra.
