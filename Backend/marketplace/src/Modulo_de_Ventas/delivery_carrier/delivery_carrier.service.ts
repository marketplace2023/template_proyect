import { Injectable } from '@nestjs/common';
import { CreateDeliveryCarrierDto } from './dto/create-delivery_carrier.dto';
import { UpdateDeliveryCarrierDto } from './dto/update-delivery_carrier.dto';

@Injectable()
export class DeliveryCarrierService {
  create(createDeliveryCarrierDto: CreateDeliveryCarrierDto) {
    return 'This action adds a new deliveryCarrier';
  }

  findAll() {
    return `This action returns all deliveryCarrier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryCarrier`;
  }

  update(id: number, updateDeliveryCarrierDto: UpdateDeliveryCarrierDto) {
    return `This action updates a #${id} deliveryCarrier`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryCarrier`;
  }
}
