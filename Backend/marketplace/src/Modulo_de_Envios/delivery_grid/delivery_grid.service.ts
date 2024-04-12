import { Injectable } from '@nestjs/common';
import { CreateDeliveryGridDto } from './dto/create-delivery_grid.dto';
import { UpdateDeliveryGridDto } from './dto/update-delivery_grid.dto';

@Injectable()
export class DeliveryGridService {
  create(createDeliveryGridDto: CreateDeliveryGridDto) {
    return 'This action adds a new deliveryGrid';
  }

  findAll() {
    return `This action returns all deliveryGrid`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryGrid`;
  }

  update(id: number, updateDeliveryGridDto: UpdateDeliveryGridDto) {
    return `This action updates a #${id} deliveryGrid`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryGrid`;
  }
}
