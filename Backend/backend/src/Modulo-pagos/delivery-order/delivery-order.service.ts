import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryOrder } from './entities/delivery-order.entity';
import { CreatedDeliveryOrderDto } from './dto/created-delivery-order.dto';
import { DeliveryOrderNotFoundException } from './error/delivery-order-not-founf.exception';
import { UpdatedDeliveryOrderDto } from './dto/updated-delivery-order.dto';

@Injectable()
export class DeliveryOrderService {
  constructor(
    @InjectRepository(DeliveryOrder)
    private readonly deliveryOrderRepository: Repository<DeliveryOrder>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryOrder[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryOrder = await this.deliveryOrderRepository
      .createQueryBuilder('deliveryOrder')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryOrder;
  }

  async create(
    createdDeliveryOrderDto: CreatedDeliveryOrderDto,
  ): Promise<DeliveryOrder> {
    const deliveryOrder = new DeliveryOrder(createdDeliveryOrderDto);
    return await this.deliveryOrderRepository.save(deliveryOrder);
  }

  async findOne(id: number): Promise<DeliveryOrder> {
    const deliveryOrder = await this.deliveryOrderRepository
      .createQueryBuilder('deliveryOrder')
      .where('deliveryOrder.id = :id', { id })
      .getOne();
    if (!deliveryOrder) {
      throw new DeliveryOrderNotFoundException();
    }
    return deliveryOrder;
  }

  async updated(
    id: number,
    updatedDeliveryOrderDto: UpdatedDeliveryOrderDto,
  ): Promise<DeliveryOrder> {
    const deliveryOrder = await this.deliveryOrderRepository
      .createQueryBuilder('deliveryOrder')
      .where('deliveryOrder.id = :id', { id })
      .getOne();
    if (!deliveryOrder) {
      throw new DeliveryOrderNotFoundException();
    }
    Object.assign(deliveryOrder, updatedDeliveryOrderDto);
    return await this.deliveryOrderRepository.save(deliveryOrder);
  }

  async deleted(id: number): Promise<void> {
    const deliveryOrder = await this.deliveryOrderRepository
      .createQueryBuilder('deliveryOrder')
      .where('deliveryOrder.id = :id', { id })
      .getOne();
    if (!deliveryOrder) {
      throw new DeliveryOrderNotFoundException();
    }
    await this.deliveryOrderRepository.softRemove(deliveryOrder);
    console.log('Delivery Order  Eliminado');
  }
}
