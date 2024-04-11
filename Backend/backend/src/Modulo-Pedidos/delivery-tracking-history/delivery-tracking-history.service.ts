import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryTrackingHistory } from './entities/delivery-tracking-history.entity';
import { Repository } from 'typeorm';
import { CreateDeliveryTrackingHistoryDto } from './dto/created-delivery-tracking-history.dto';
import { DeliveryTrackingHistoryNotFoundException } from './error/delivery-tracking-history-not-found.exception';
import { UpdatedDeliveryTrackingHistoryDto } from './dto/updated-delivery-tracking-history.dto';

@Injectable()
export class DeliveryTrackingHistoryService {
  constructor(
    @InjectRepository(DeliveryTrackingHistory)
    private readonly deliveryTrackingHistoryRepository: Repository<DeliveryTrackingHistory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryTrackingHistory[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryTrackingHistory = await this.deliveryTrackingHistoryRepository
      .createQueryBuilder('deliveryTrackingHistory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryTrackingHistory;
  }

  async create(
    createDeliveryTrackingHistoryDto: CreateDeliveryTrackingHistoryDto,
  ): Promise<DeliveryTrackingHistory> {
    const deliveryTrackingHistory = new DeliveryTrackingHistory(
      createDeliveryTrackingHistoryDto,
    );
    return await this.deliveryTrackingHistoryRepository.save(
      deliveryTrackingHistory,
    );
  }

  async findOne(id: number): Promise<DeliveryTrackingHistory> {
    const deliveryTrackingHistory = await this.deliveryTrackingHistoryRepository
      .createQueryBuilder('deliveryTrackingHistory')
      .where('deliveryTrackingHistory.id = :id', { id })
      .getOne();
    if (!deliveryTrackingHistory) {
      throw new DeliveryTrackingHistoryNotFoundException();
    }
    return deliveryTrackingHistory;
  }

  async updated(
    id: number,
    updatedDeliveryTrackingHistoryDto: UpdatedDeliveryTrackingHistoryDto,
  ): Promise<DeliveryTrackingHistory> {
    const deliveryTrackingHistory = await this.deliveryTrackingHistoryRepository
      .createQueryBuilder('deliveryTrackingHistory')
      .where('deliveryTrackingHistory.id = :id', { id })
      .getOne();
    if (!deliveryTrackingHistory) {
      throw new DeliveryTrackingHistoryNotFoundException();
    }
    Object.assign(deliveryTrackingHistory, updatedDeliveryTrackingHistoryDto);
    return await this.deliveryTrackingHistoryRepository.save(
      deliveryTrackingHistory,
    );
  }

  async deleted(id: number): Promise<void> {
    const deliveryTrackingHistory = await this.deliveryTrackingHistoryRepository
      .createQueryBuilder('deliveryTrackingHistory')
      .where('deliveryTrackingHistory.id = :id', { id })
      .getOne();
    if (!deliveryTrackingHistory) {
      throw new DeliveryTrackingHistoryNotFoundException();
    }
    await this.deliveryTrackingHistoryRepository.softRemove(
      deliveryTrackingHistory,
    );
    console.log('deliveryTrackingHistory Eliminado');
  }
}
