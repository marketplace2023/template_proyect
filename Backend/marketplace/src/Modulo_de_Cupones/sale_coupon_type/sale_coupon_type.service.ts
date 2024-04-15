import { Injectable } from '@nestjs/common';
import { CreateSaleCouponTypeDto } from './dto/create-sale_coupon_type.dto';
import { UpdateSaleCouponTypeDto } from './dto/update-sale_coupon_type.dto';

@Injectable()
export class SaleCouponTypeService {
  create(createSaleCouponTypeDto: CreateSaleCouponTypeDto) {
    return 'This action adds a new saleCouponType';
  }

  findAll() {
    return `This action returns all saleCouponType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponType`;
  }

  update(id: number, updateSaleCouponTypeDto: UpdateSaleCouponTypeDto) {
    return `This action updates a #${id} saleCouponType`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponType`;
  }
}
