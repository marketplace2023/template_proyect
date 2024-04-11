import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChooseDeliveryCarrier } from './entities/choose-delivery-carrier.entity';
import { Repository } from 'typeorm';
import { CreateChooseDeliveryCarrierDto } from './dto/create-choose-delivery-carrier.dto';
import { ChooseDeliveryCarrierNotFoundException } from './error/choose-delivery-carrier-not-found.exception';
import { UpdatedChooseDeliveryCarrierDto } from './dto/updated-choose-delivery-carrier.dto';

@Injectable()
export class ChooseDeliveryCarrierService {
  constructor(
    @InjectRepository(ChooseDeliveryCarrier)
    private readonly deliveryCarrierRepository: Repository<ChooseDeliveryCarrier>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ChooseDeliveryCarrier[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryCarrier;
  }

  async create(
    createChooseDeliveryCarrierDto: CreateChooseDeliveryCarrierDto,
  ): Promise<ChooseDeliveryCarrier> {
    const deliveryCarrier = new ChooseDeliveryCarrier(
      createChooseDeliveryCarrierDto,
    );
    return await this.deliveryCarrierRepository.save(deliveryCarrier);
  }

  async findOne(id: number): Promise<ChooseDeliveryCarrier> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new ChooseDeliveryCarrierNotFoundException();
    }
    return deliveryCarrier;
  }

  async updated(
    id: number,
    updatedChooseDeliveryCarrierDto: UpdatedChooseDeliveryCarrierDto,
  ): Promise<ChooseDeliveryCarrier> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new ChooseDeliveryCarrierNotFoundException();
    }
    Object.assign(deliveryCarrier, updatedChooseDeliveryCarrierDto);
    return await this.deliveryCarrierRepository.save(deliveryCarrier);
  }

  async deleted(id: number): Promise<void> {
    const deliveryCarrier = await this.deliveryCarrierRepository
      .createQueryBuilder('deliveryCarrier')
      .where('deliveryCarrier.id = :id', { id })
      .getOne();
    if (!deliveryCarrier) {
      throw new ChooseDeliveryCarrierNotFoundException();
    }
    await this.deliveryCarrierRepository.softRemove(deliveryCarrier);
    console.log('deliveryCarrier Eliminado');
  }
}
