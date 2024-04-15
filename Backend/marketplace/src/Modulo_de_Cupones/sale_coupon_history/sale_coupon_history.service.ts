import { Injectable } from '@nestjs/common';
import { CreateSaleCouponHistoryDto } from './dto/create-sale_coupon_history.dto';
import { UpdateSaleCouponHistoryDto } from './dto/update-sale_coupon_history.dto';

@Injectable()
export class SaleCouponHistoryService {
  create(createSaleCouponHistoryDto: CreateSaleCouponHistoryDto) {
    return 'This action adds a new saleCouponHistory';
  }

  findAll() {
    return `This action returns all saleCouponHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponHistory`;
  }

  update(id: number, updateSaleCouponHistoryDto: UpdateSaleCouponHistoryDto) {
    return `This action updates a #${id} saleCouponHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponHistory`;
  }
}
