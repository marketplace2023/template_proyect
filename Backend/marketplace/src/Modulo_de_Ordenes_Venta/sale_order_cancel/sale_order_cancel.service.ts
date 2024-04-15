import { Injectable } from '@nestjs/common';
import { CreateSaleOrderCancelDto } from './dto/create-sale_order_cancel.dto';
import { UpdateSaleOrderCancelDto } from './dto/update-sale_order_cancel.dto';

@Injectable()
export class SaleOrderCancelService {
  create(createSaleOrderCancelDto: CreateSaleOrderCancelDto) {
    return 'This action adds a new saleOrderCancel';
  }

  findAll() {
    return `This action returns all saleOrderCancel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderCancel`;
  }

  update(id: number, updateSaleOrderCancelDto: UpdateSaleOrderCancelDto) {
    return `This action updates a #${id} saleOrderCancel`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderCancel`;
  }
}
