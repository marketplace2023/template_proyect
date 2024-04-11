import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderLineNotFoundException } from './error/order-line-not-found.exception';
import { UpdatedOrderLineDto } from './dto/updated-order-line.dto';
import { CreateOrderLineDto } from './dto/created-order-line.dto';
import { Repository } from 'typeorm';
import { OrderLine } from './entities/order-line.entity';

@Injectable()
export class OrderLineService {
  constructor(
    @InjectRepository(OrderLine)
    private readonly OrderLineRepository: Repository<OrderLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<OrderLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const OrderLine = await this.OrderLineRepository.createQueryBuilder(
      'OrderLine',
    )
      .take(perPage)
      .skip(offset)
      .getMany();
    return OrderLine;
  }

  async create(createOrderLineDto: CreateOrderLineDto): Promise<OrderLine> {
    const orderLine = new OrderLine(createOrderLineDto);
    return await this.OrderLineRepository.save(orderLine);
  }

  async findOne(id: number): Promise<OrderLine> {
    const OrderLine = await this.OrderLineRepository.createQueryBuilder(
      'OrderLine',
    )
      .where('OrderLine.id = :id', { id })
      .getOne();
    if (!OrderLine) {
      throw new OrderLineNotFoundException();
    }
    return OrderLine;
  }

  async updated(
    id: number,
    updatedOrderLineDto: UpdatedOrderLineDto,
  ): Promise<OrderLine> {
    const OrderLine = await this.OrderLineRepository.createQueryBuilder(
      'OrderLine',
    )
      .where('OrderLine.id = :id', { id })
      .getOne();
    if (!OrderLine) {
      throw new OrderLineNotFoundException();
    }
    Object.assign(OrderLine, updatedOrderLineDto);
    return await this.OrderLineRepository.save(OrderLine);
  }

  async deleted(id: number): Promise<void> {
    const OrderLine = await this.OrderLineRepository.createQueryBuilder(
      'OrderLine',
    )
      .where('OrderLine.id = :id', { id })
      .getOne();
    if (!OrderLine) {
      throw new OrderLineNotFoundException();
    }
    await this.OrderLineRepository.softRemove(OrderLine);
    console.log('OrderLine Eliminado');
  }
}
