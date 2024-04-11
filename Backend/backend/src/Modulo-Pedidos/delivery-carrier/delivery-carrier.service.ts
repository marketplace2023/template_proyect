import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryCarrier } from './entities/delivery-carrier.entity';
import { CreateDeliveryCarrierDto } from './dto/create-delivery-carrier.dto';
import { UpdatedDeliveryCarrierDto } from './dto/updated-delivery-carrier.dto';
import { DeliveryCarrierNotFoundException } from './error/delivery-carrier-not-found.exception';

@Injectable()
export class DeliveryCarrierService {
  constructor(
    @InjectRepository(DeliveryCarrier)
    private readonly deliveryCarrierRepository: Repository<DeliveryCarrier>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryCarrier[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryCarrier;
  }

  async create(
    createDeliveryCarrierDto: CreateDeliveryCarrierDto,
  ): Promise<DeliveryCarrier> {
    const deliveryCarrier = new DeliveryCarrier(createDeliveryCarrierDto);
    return await this.deliveryCarrierRepository.save(deliveryCarrier);
  }

  async findOne(id: number): Promise<DeliveryCarrier> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new DeliveryCarrierNotFoundException();
    }
    return deliveryCarrier;
  }

  async updated(
    id: number,
    updatedDeliveryCarrierDto: UpdatedDeliveryCarrierDto,
  ): Promise<DeliveryCarrier> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new DeliveryCarrierNotFoundException();
    }
    Object.assign(deliveryCarrier, updatedDeliveryCarrierDto);
    return await this.deliveryCarrierRepository.save(deliveryCarrier);
  }

  async deleted(id: number): Promise<void> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new DeliveryCarrierNotFoundException();
    }
    await this.deliveryCarrierRepository.softRemove(deliveryCarrier);
    console.log('deliveryCarrier Eliminado');
  }
}
