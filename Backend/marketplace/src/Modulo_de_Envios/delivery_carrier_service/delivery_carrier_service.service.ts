import { Injectable } from '@nestjs/common';
import { CreateDeliveryCarrierServiceDto } from './dto/create-delivery_carrier_service.dto';
import { UpdateDeliveryCarrierServiceDto } from './dto/update-delivery_carrier_service.dto';

@Injectable()
export class DeliveryCarrierServiceService {
  create(createDeliveryCarrierServiceDto: CreateDeliveryCarrierServiceDto) {
    return 'This action adds a new deliveryCarrierService';
  }

  findAll() {
    return `This action returns all deliveryCarrierService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryCarrierService`;
  }

  update(id: number, updateDeliveryCarrierServiceDto: UpdateDeliveryCarrierServiceDto) {
    return `This action updates a #${id} deliveryCarrierService`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryCarrierService`;
  }
}
