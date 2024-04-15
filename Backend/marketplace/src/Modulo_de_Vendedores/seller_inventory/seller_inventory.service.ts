import { Injectable } from '@nestjs/common';
import { CreateSellerInventoryDto } from './dto/create-seller_inventory.dto';
import { UpdateSellerInventoryDto } from './dto/update-seller_inventory.dto';

@Injectable()
export class SellerInventoryService {
  create(createSellerInventoryDto: CreateSellerInventoryDto) {
    return 'This action adds a new sellerInventory';
  }

  findAll() {
    return `This action returns all sellerInventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerInventory`;
  }

  update(id: number, updateSellerInventoryDto: UpdateSellerInventoryDto) {
    return `This action updates a #${id} sellerInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerInventory`;
  }
}
