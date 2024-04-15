import { Injectable } from '@nestjs/common';
import { CreatePurchaseOrderLineDto } from './dto/create-purchase_order_line.dto';
import { UpdatePurchaseOrderLineDto } from './dto/update-purchase_order_line.dto';

@Injectable()
export class PurchaseOrderLineService {
  create(createPurchaseOrderLineDto: CreatePurchaseOrderLineDto) {
    return 'This action adds a new purchaseOrderLine';
  }

  findAll() {
    return `This action returns all purchaseOrderLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purchaseOrderLine`;
  }

  update(id: number, updatePurchaseOrderLineDto: UpdatePurchaseOrderLineDto) {
    return `This action updates a #${id} purchaseOrderLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} purchaseOrderLine`;
  }
}
