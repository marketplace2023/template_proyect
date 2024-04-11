import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockCarrier } from './entities/stock-carrier.entity';
import { Repository } from 'typeorm';
import { CreateStockCarrierDto } from './dto/created-stock-carrier.dto';
import { StockCarrierNotFoundException } from './error/stock-carrier-not-found.exceprtion';
import { UpdatedStockCarrierDto } from './dto/updated-stock-carrier.dto';

@Injectable()
export class StockCarrierService {
  constructor(
    @InjectRepository(StockCarrier)
    private readonly stockCarrierRepository: Repository<StockCarrier>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockCarrier[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockCarrier = await this.stockCarrierRepository
      .createQueryBuilder('stockCarrier')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockCarrier;
  }

  async create(
    createStockCarrierDto: CreateStockCarrierDto,
  ): Promise<StockCarrier> {
    const stockCarrier = new StockCarrier(createStockCarrierDto);
    return await this.stockCarrierRepository.save(stockCarrier);
  }

  async findOne(id: number): Promise<StockCarrier> {
    const stockCarrier = await this.stockCarrierRepository
      .createQueryBuilder('stockCarrier')
      .where('stockCarrier.id = :id', { id })
      .getOne();
    if (!stockCarrier) {
      throw new StockCarrierNotFoundException();
    }
    return stockCarrier;
  }

  async updated(
    id: number,
    updatedStockCarrierDto: UpdatedStockCarrierDto,
  ): Promise<StockCarrier> {
    const stockCarrier = await this.stockCarrierRepository
      .createQueryBuilder('stockCarrier')
      .where('stockCarrier.id = :id', { id })
      .getOne();
    if (!stockCarrier) {
      throw new StockCarrierNotFoundException();
    }
    Object.assign(stockCarrier, updatedStockCarrierDto);
    return await this.stockCarrierRepository.save(stockCarrier);
  }

  async deleted(id: number): Promise<void> {
    const stockCarrier = await this.stockCarrierRepository
      .createQueryBuilder('stockCarrier')
      .where('stockCarrier.id = :id', { id })
      .getOne();
    if (!stockCarrier) {
      throw new StockCarrierNotFoundException();
    }
    await this.stockCarrierRepository.softRemove(stockCarrier);
    console.log('stockCarrier Eliminado');
  }
}
