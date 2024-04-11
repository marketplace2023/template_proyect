import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingTypeNotFoundException } from './error/stock-picking-type-not-found.exception';
import { UpdatedStockPickingTypeDto } from './dto/updated-stock-picking-type.dto';
import { StockPickingType } from './entities/stock-picking-type.entity';
import { Repository } from 'typeorm';
import { CreateStockPickingTypeDto } from './dto/created-stock-picking-type.dto';

@Injectable()
export class StockPickingTypeService {
  constructor(
    @InjectRepository(StockPickingType)
    private readonly stockPickingTypeRepository: Repository<StockPickingType>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingType[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingType = await this.stockPickingTypeRepository
      .createQueryBuilder('stockPickingType')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingType;
  }
  async create(
    createStockPickingTypeDto: CreateStockPickingTypeDto,
  ): Promise<StockPickingType> {
    const stockPickingType = new StockPickingType(createStockPickingTypeDto);
    return await this.stockPickingTypeRepository.save(stockPickingType);
  }
  async findOne(id: number): Promise<StockPickingType> {
    const stockPickingType = await this.stockPickingTypeRepository
      .createQueryBuilder('stockPickingType')
      .where('stockPickingType.id = :id', { id })
      .getOne();
    if (!stockPickingType) {
      throw new StockPickingTypeNotFoundException();
    }
    return stockPickingType;
  }
  async updated(
    id: number,
    updatedStockPickingTypeDto: UpdatedStockPickingTypeDto,
  ): Promise<StockPickingType> {
    const stockPickingType = await this.stockPickingTypeRepository
      .createQueryBuilder('stockPickingType')
      .where('stockPickingType.id = :id', { id })
      .getOne();
    if (!stockPickingType) {
      throw new StockPickingTypeNotFoundException();
    }
    Object.assign(stockPickingType, updatedStockPickingTypeDto);
    return await this.stockPickingTypeRepository.save(stockPickingType);
  }
  async deleted(id: number): Promise<void> {
    const stockPickingType = await this.stockPickingTypeRepository
      .createQueryBuilder('stockPickingType')
      .where('stockPickingType.id = :id', { id })
      .getOne();
    if (!stockPickingType) {
      throw new StockPickingTypeNotFoundException();
    }
    await this.stockPickingTypeRepository.softRemove(stockPickingType);
    console.log('Stock Picking Type column Eliminado');
  }
}
