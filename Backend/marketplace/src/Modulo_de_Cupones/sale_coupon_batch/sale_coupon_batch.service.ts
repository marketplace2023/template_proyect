import { Injectable } from '@nestjs/common';
import { CreateSaleCouponBatchDto } from './dto/create-sale_coupon_batch.dto';
import { UpdateSaleCouponBatchDto } from './dto/update-sale_coupon_batch.dto';

@Injectable()
export class SaleCouponBatchService {
  create(createSaleCouponBatchDto: CreateSaleCouponBatchDto) {
    return 'This action adds a new saleCouponBatch';
  }

  findAll() {
    return `This action returns all saleCouponBatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleCouponBatch`;
  }

  update(id: number, updateSaleCouponBatchDto: UpdateSaleCouponBatchDto) {
    return `This action updates a #${id} saleCouponBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleCouponBatch`;
  }
}
