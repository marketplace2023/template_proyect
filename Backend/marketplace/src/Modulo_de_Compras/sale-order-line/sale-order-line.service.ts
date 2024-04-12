import { Injectable } from '@nestjs/common';
import { CreateSaleOrderLineDto } from './dto/create-sale-order-line.dto';
import { UpdateSaleOrderLineDto } from './dto/update-sale-order-line.dto';

@Injectable()
export class SaleOrderLineService {
  create(createSaleOrderLineDto: CreateSaleOrderLineDto) {
    return 'This action adds a new saleOrderLine';
  }

  findAll() {
    return `This action returns all saleOrderLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderLine`;
  }

  update(id: number, updateSaleOrderLineDto: UpdateSaleOrderLineDto) {
    return `This action updates a #${id} saleOrderLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderLine`;
  }
}
