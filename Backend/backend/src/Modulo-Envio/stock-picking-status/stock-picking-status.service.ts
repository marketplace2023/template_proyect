import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingStatus } from './entities/stock-picking-status.entity';
import { StockPickingStatusNotFoundException } from './error/stock-picking-status-not-found.exception';
import { UpdatedStockPickingStatusDto } from './dto/updated-stock-picking-status.dto';
import { CreateStockPickingStatusDto } from './dto/created-stock-picking-status.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StockPickingStatusService {
  constructor(
    @InjectRepository(StockPickingStatus)
    private readonly stockPickingStatusRepository: Repository<StockPickingStatus>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingStatus[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingStatus = await this.stockPickingStatusRepository
      .createQueryBuilder('stockPickingStatus')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingStatus;
  }

  async create(
    createStockPickingStatusDto: CreateStockPickingStatusDto,
  ): Promise<StockPickingStatus> {
    const stockPickingStatus = new StockPickingStatus(
      createStockPickingStatusDto,
    );
    return await this.stockPickingStatusRepository.save(stockPickingStatus);
  }

  async findOne(id: number): Promise<StockPickingStatus> {
    const stockPickingStatus = await this.stockPickingStatusRepository
      .createQueryBuilder('stockPickingStatus')
      .where('stockPickingStatus.id = :id', { id })
      .getOne();
    if (!stockPickingStatus) {
      throw new StockPickingStatusNotFoundException();
    }
    return stockPickingStatus;
  }

  async updated(
    id: number,
    updatedStockPickingStatusDto: UpdatedStockPickingStatusDto,
  ): Promise<StockPickingStatus> {
    const stockPickingStatus = await this.stockPickingStatusRepository
      .createQueryBuilder('stockPickingStatus')
      .where('stockPickingStatus.id = :id', { id })
      .getOne();
    if (!stockPickingStatus) {
      throw new StockPickingStatusNotFoundException();
    }
    Object.assign(stockPickingStatus, updatedStockPickingStatusDto);
    return await this.stockPickingStatusRepository.save(stockPickingStatus);
  }

  async deleted(id: number): Promise<void> {
    const stockPickingStatus = await this.stockPickingStatusRepository
      .createQueryBuilder('stockPickingStatus')
      .where('stockPickingStatus.id = :id', { id })
      .getOne();
    if (!stockPickingStatus) {
      throw new StockPickingStatusNotFoundException();
    }
    await this.stockPickingStatusRepository.softRemove(stockPickingStatus);
    console.log('stockPickingStatus Eliminado');
  }
}
