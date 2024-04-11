import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatedDeliveryTrackingEventDto } from './dto/updated-delivery-tracking-event.dto';
import { CreateDeliveryTrackingEventDto } from './dto/created-delivery-tracking-event.dto';
import { DeliveryTrackingEvent } from './entities/delivery-tracking-event.entity';
import { DeliveryTrackingEventNotFoundException } from './error/delivery-tracking-event-not-found.exception';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryTrackingEventService {
  constructor(
    @InjectRepository(DeliveryTrackingEvent)
    private readonly deliveryTrackingEventRepository: Repository<DeliveryTrackingEvent>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryTrackingEvent[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryTrackingEvent = await this.deliveryTrackingEventRepository
      .createQueryBuilder('deliveryTrackingEvent')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryTrackingEvent;
  }

  async create(
    createDeliveryTrackingEventDto: CreateDeliveryTrackingEventDto,
  ): Promise<DeliveryTrackingEvent> {
    const deliveryTrackingEvent = new DeliveryTrackingEvent(
      createDeliveryTrackingEventDto,
    );
    return await this.deliveryTrackingEventRepository.save(
      deliveryTrackingEvent,
    );
  }

  async findOne(id: number): Promise<DeliveryTrackingEvent> {
    const deliveryTrackingEvent = await this.deliveryTrackingEventRepository
      .createQueryBuilder('deliveryTrackingEvent')
      .where('deliveryTrackingEvent.id = :id', { id })
      .getOne();
    if (!deliveryTrackingEvent) {
      throw new DeliveryTrackingEventNotFoundException();
    }
    return deliveryTrackingEvent;
  }
  async updated(
    id: number,
    updatedDeliveryTrackingEventDto: UpdatedDeliveryTrackingEventDto,
  ): Promise<DeliveryTrackingEvent> {
    const deliveryTrackingEvent = await this.deliveryTrackingEventRepository
      .createQueryBuilder('deliveryTrackingEvent')
      .where('deliveryTrackingEvent.id = :id', { id })
      .getOne();
    if (!deliveryTrackingEvent) {
      throw new DeliveryTrackingEventNotFoundException();
    }
    Object.assign(deliveryTrackingEvent, updatedDeliveryTrackingEventDto);
    return await this.deliveryTrackingEventRepository.save(
      deliveryTrackingEvent,
    );
  }

  async deleted(id: number): Promise<void> {
    const deliveryTrackingEvent = await this.deliveryTrackingEventRepository
      .createQueryBuilder('deliveryTrackingEvent')
      .where('deliveryTrackingEvent.id = :id', { id })
      .getOne();
    if (!deliveryTrackingEvent) {
      throw new DeliveryTrackingEventNotFoundException();
    }
    await this.deliveryTrackingEventRepository.softRemove(
      deliveryTrackingEvent,
    );
    console.log('deliveryTrackingEvent Eliminado');
  }
}
