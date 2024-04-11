import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleOrder } from './entities/sale-order.entity';
import { Repository } from 'typeorm';
import { CreateSaleOrderDto } from './dto/created-sale-order.dto';
import { SaleOrderNotFoundException } from './error/sale-order-not-found.exception';
import { UpdatedSaleOrderDto } from './dto/updated-sale-order.dto';

@Injectable()
export class SaleOrderService {
  constructor(
    @InjectRepository(SaleOrder)
    private readonly saleOrderRepository: Repository<SaleOrder>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleOrder[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleOrder = await this.saleOrderRepository
      .createQueryBuilder('saleOrder')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleOrder;
  }

  async create(createSaleOrderDto: CreateSaleOrderDto): Promise<SaleOrder> {
    const saleOrder = new SaleOrder(createSaleOrderDto);
    return await this.saleOrderRepository.save(saleOrder);
  }

  async findOne(id: number): Promise<SaleOrder> {
    const saleOrder = await this.saleOrderRepository
      .createQueryBuilder('saleOrder')
      .where('saleOrder.id = :id', { id })
      .getOne();
    if (!saleOrder) {
      throw new SaleOrderNotFoundException();
    }
    return saleOrder;
  }

  async updated(
    id: number,
    updatedSaleOrderDto: UpdatedSaleOrderDto,
  ): Promise<SaleOrder> {
    const saleOrder = await this.saleOrderRepository
      .createQueryBuilder('saleOrder')
      .where('saleOrder.id = :id', { id })
      .getOne();
    if (!saleOrder) {
      throw new SaleOrderNotFoundException();
    }
    Object.assign(saleOrder, updatedSaleOrderDto);
    return await this.saleOrderRepository.save(saleOrder);
  }

  async deleted(id: number): Promise<void> {
    const saleOrder = await this.saleOrderRepository
      .createQueryBuilder('saleOrder')
      .where('saleOrder.id = :id', { id })
      .getOne();
    if (!saleOrder) {
      throw new SaleOrderNotFoundException();
    }
    await this.saleOrderRepository.softRemove(saleOrder);
    console.log('Report Paperformat column Eliminado');
  }
}
