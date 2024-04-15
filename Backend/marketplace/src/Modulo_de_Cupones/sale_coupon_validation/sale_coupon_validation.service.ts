import { Injectable } from '@nestjs/common';
import { CreateSaleCouponValidationDto } from './dto/create-sale_coupon_validation.dto';
import { UpdateSaleCouponValidationDto } from './dto/update-sale_coupon_validation.dto';

@Injectable()
export class SaleCouponValidationService {
  create(createSaleCouponValidationDto: CreateSaleCouponValidationDto) {
    return 'This action adds a new saleCouponValidation';
  }

  findAll() {
    return `This action returns all saleCouponValidation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponValidation`;
  }

  update(id: number, updateSaleCouponValidationDto: UpdateSaleCouponValidationDto) {
    return `This action updates a #${id} saleCouponValidation`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponValidation`;
  }
}
