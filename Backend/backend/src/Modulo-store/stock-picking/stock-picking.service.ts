import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingNotFoundException } from './error/stock-picking-not-found.exception';
import { StockPicking } from './entities/stock-picking.entity';
import { UpdatedStockPickingDto } from './dto/updated-stock-picking.dto';
import { CreateStockPickingDto } from './dto/created-stock-picking.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StockPickingService {
  constructor(
    @InjectRepository(StockPicking)
    private readonly stockPickingRepository: Repository<StockPicking>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPicking[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPicking = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPicking;
  }

  async create(
    createStockPickingDto: CreateStockPickingDto,
  ): Promise<StockPicking> {
    const stockPicking = new StockPicking(createStockPickingDto);
    return await this.stockPickingRepository.save(stockPicking);
  }

  async findOne(id: number): Promise<StockPicking> {
    const stockPicking = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .where('stockPicking.id = :id', { id })
      .getOne();
    if (!stockPicking) {
      throw new StockPickingNotFoundException();
    }
    return stockPicking;
  }

  async updated(
    id: number,
    updatedStockPickingDto: UpdatedStockPickingDto,
  ): Promise<StockPicking> {
    const stockPicking = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .where('stockPicking.id = :id', { id })
      .getOne();
    if (!stockPicking) {
      throw new StockPickingNotFoundException();
    }
    Object.assign(stockPicking, updatedStockPickingDto);
    return await this.stockPickingRepository.save(stockPicking);
  }

  async deleted(id: number): Promise<void> {
    const stockPicking = await this.stockPickingRepository
      .createQueryBuilder('stockPicking')
      .where('stockPicking.id = :id', { id })
      .getOne();
    if (!stockPicking) {
      throw new StockPickingNotFoundException();
    }
    await this.stockPickingRepository.softRemove(stockPicking);
    console.log('Stock Picking column Eliminado');
  }
}
