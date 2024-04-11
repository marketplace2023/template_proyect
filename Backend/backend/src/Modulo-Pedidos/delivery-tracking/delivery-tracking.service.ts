import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryTrackingNotFoundException } from './error/delivery-tracking-not-found.exception';
import { UpdatedDeliveryTrackingDto } from './dto/updated-delivery-tracking.dto';
import { DeliveryTracking } from './entities/delivery-tracking.entity';
import { CreateDeliveryTrackingDto } from './dto/created-delivery-tracking.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryTrackingService {
  constructor(
    @InjectRepository(DeliveryTracking)
    private readonly deliveryTrackingRepository: Repository<DeliveryTracking>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryTracking[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryTracking = await this.deliveryTrackingRepository
      .createQueryBuilder('deliveryTracking')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryTracking;
  }

  async create(
    createDeliveryTrackingDto: CreateDeliveryTrackingDto,
  ): Promise<DeliveryTracking> {
    const deliveryTracking = new DeliveryTracking(createDeliveryTrackingDto);
    return await this.deliveryTrackingRepository.save(deliveryTracking);
  }

  async findOne(id: number): Promise<DeliveryTracking> {
    const deliveryTracking = await this.deliveryTrackingRepository
      .createQueryBuilder('deliveryTracking')
      .where('deliveryTracking.id = :id', { id })
      .getOne();
    if (!deliveryTracking) {
      throw new DeliveryTrackingNotFoundException();
    }
    return deliveryTracking;
  }

  async updated(
    id: number,
    updatedDeliveryTrackingDto: UpdatedDeliveryTrackingDto,
  ): Promise<DeliveryTracking> {
    const deliveryTracking = await this.deliveryTrackingRepository
      .createQueryBuilder('deliveryTracking')
      .where('deliveryTracking.id = :id', { id })
      .getOne();
    if (!deliveryTracking) {
      throw new DeliveryTrackingNotFoundException();
    }
    Object.assign(deliveryTracking, updatedDeliveryTrackingDto);
    return await this.deliveryTrackingRepository.save(deliveryTracking);
  }

  async deleted(id: number): Promise<void> {
    const deliveryTracking = await this.deliveryTrackingRepository
      .createQueryBuilder('deliveryTracking')
      .where('deliveryTracking.id = :id', { id })
      .getOne();
    if (!deliveryTracking) {
      throw new DeliveryTrackingNotFoundException();
    }
    await this.deliveryTrackingRepository.softRemove(deliveryTracking);
    console.log('deliveryTracking Eliminado');
  }
}
