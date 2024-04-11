import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingTracking } from './entities/stock-picking-tracking.entity';
import { Repository } from 'typeorm';
import { CreateStockPickingTrackingDto } from './dto/created-stock-picking-tracking.dto';
import { StockPickingTrackingNotFoundException } from './error/stock-picking-tracking-not-found.exception';
import { UpdatedStockPickingTrackingDto } from './dto/updated-stock-picking-tracking.dto';

@Injectable()
export class StockPickingTrackingService {
  constructor(
    @InjectRepository(StockPickingTracking)
    private readonly stockPickingTrackingRepository: Repository<StockPickingTracking>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingTracking[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingTracking = await this.stockPickingTrackingRepository
      .createQueryBuilder('stockPickingTracking')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingTracking;
  }

  async create(
    createStockPickingTrackingDto: CreateStockPickingTrackingDto,
  ): Promise<StockPickingTracking> {
    const stockPickingTracking = new StockPickingTracking(
      createStockPickingTrackingDto,
    );
    return await this.stockPickingTrackingRepository.save(stockPickingTracking);
  }

  async findOne(id: number): Promise<StockPickingTracking> {
    const stockPickingTracking = await this.stockPickingTrackingRepository
      .createQueryBuilder('stockPickingTracking')
      .where('stockPickingTracking.id = :id', { id })
      .getOne();
    if (!stockPickingTracking) {
      throw new StockPickingTrackingNotFoundException();
    }
    return stockPickingTracking;
  }

  async updated(
    id: number,
    updatedStockPickingTrackingDto: UpdatedStockPickingTrackingDto,
  ): Promise<StockPickingTracking> {
    const stockPickingTracking = await this.stockPickingTrackingRepository
      .createQueryBuilder('stockPickingTracking')
      .where('stockPickingTracking.id = :id', { id })
      .getOne();
    if (!stockPickingTracking) {
      throw new StockPickingTrackingNotFoundException();
    }
    Object.assign(stockPickingTracking, updatedStockPickingTrackingDto);
    return await this.stockPickingTrackingRepository.save(stockPickingTracking);
  }

  async deleted(id: number): Promise<void> {
    const stockPickingTracking = await this.stockPickingTrackingRepository
      .createQueryBuilder('stockPickingTracking')
      .where('stockPickingTracking.id = :id', { id })
      .getOne();
    if (!stockPickingTracking) {
      throw new StockPickingTrackingNotFoundException();
    }
    await this.stockPickingTrackingRepository.softRemove(stockPickingTracking);
    console.log('stockPickingTracking Eliminado');
  }
}
