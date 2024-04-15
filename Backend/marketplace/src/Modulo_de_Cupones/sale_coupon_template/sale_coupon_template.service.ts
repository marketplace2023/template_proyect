import { Injectable } from '@nestjs/common';
import { CreateSaleCouponTemplateDto } from './dto/create-sale_coupon_template.dto';
import { UpdateSaleCouponTemplateDto } from './dto/update-sale_coupon_template.dto';

@Injectable()
export class SaleCouponTemplateService {
  create(createSaleCouponTemplateDto: CreateSaleCouponTemplateDto) {
    return 'This action adds a new saleCouponTemplate';
  }

  findAll() {
    return `This action returns all saleCouponTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponTemplate`;
  }

  update(id: number, updateSaleCouponTemplateDto: UpdateSaleCouponTemplateDto) {
    return `This action updates a #${id} saleCouponTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponTemplate`;
  }
}
