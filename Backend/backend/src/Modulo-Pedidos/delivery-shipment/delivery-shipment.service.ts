import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryShipment } from './entities/delivery-shipment.entity';
import { Repository } from 'typeorm';
import { DeliveryShipmentNotFoundException } from './error/delivery-shipment-not-found.exception';
import { UpdatedDeliveryShipmentDto } from './dto/updated-delivery-shipment.dto';
import { CreateDeliveryShipmentDto } from './dto/created-delivery-shipment.dto';

@Injectable()
export class DeliveryShipmentService {
  constructor(
    @InjectRepository(DeliveryShipment)
    private readonly deliveryShipmentRepository: Repository<DeliveryShipment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryShipment[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryShipment = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryShipment;
  }

  async create(
    createDeliveryShipmentDto: CreateDeliveryShipmentDto,
  ): Promise<DeliveryShipment> {
    const deliveryShipment = new DeliveryShipment(createDeliveryShipmentDto);
    return await this.deliveryShipmentRepository.save(deliveryShipment);
  }

  async findOne(id: number): Promise<DeliveryShipment> {
    const deliveryShipment = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .where('deliveryShipment.id = :id', { id })
      .getOne();
    if (!deliveryShipment) {
      throw new DeliveryShipmentNotFoundException();
    }
    return deliveryShipment;
  }

  async updated(
    id: number,
    updatedDeliveryShipmentDto: UpdatedDeliveryShipmentDto,
  ): Promise<DeliveryShipment> {
    const deliveryShipment = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .where('deliveryShipment.id = :id', { id })
      .getOne();
    if (!deliveryShipment) {
      throw new DeliveryShipmentNotFoundException();
    }
    Object.assign(deliveryShipment, updatedDeliveryShipmentDto);
    return await this.deliveryShipmentRepository.save(deliveryShipment);
  }

  async deleted(id: number): Promise<void> {
    const deliveryShipment = await this.deliveryShipmentRepository
      .createQueryBuilder('deliveryShipment')
      .where('deliveryShipment.id = :id', { id })
      .getOne();
    if (!deliveryShipment) {
      throw new DeliveryShipmentNotFoundException();
    }
    await this.deliveryShipmentRepository.softRemove(deliveryShipment);
    console.log('deliveryShipment Eliminado');
  }
}
