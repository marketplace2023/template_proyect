import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingBatch } from './entities/stock-picking-batch.entity';
import { Repository } from 'typeorm';
import { CreateStockPickingBatchDto } from './dto/created-stock-picking-batch.dto';
import { StockPickingBatchNotFoundException } from './error/stock-picking-batch-not-found.exception';
import { UpdatedStockPickingBatchDto } from './dto/updated-stock-picking-batch.dto';

@Injectable()
export class StockPickingBatchService {
  constructor(
    @InjectRepository(StockPickingBatch)
    private readonly stockPickingBatchRepository: Repository<StockPickingBatch>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingBatch[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingBatch = await this.stockPickingBatchRepository
      .createQueryBuilder('stockPickingBatch')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingBatch;
  }

  async create(
    createStockPickingBatchDto: CreateStockPickingBatchDto,
  ): Promise<StockPickingBatch> {
    const stockPickingBatch = new StockPickingBatch(createStockPickingBatchDto);
    return await this.stockPickingBatchRepository.save(stockPickingBatch);
  }

  async findOne(id: number): Promise<StockPickingBatch> {
    const stockPickingBatch = await this.stockPickingBatchRepository
      .createQueryBuilder('stockPickingBatch')
      .where('stockPickingBatch.id = :id', { id })
      .getOne();
    if (!stockPickingBatch) {
      throw new StockPickingBatchNotFoundException();
    }
    return stockPickingBatch;
  }

  async updated(
    id: number,
    updatedStockPickingBatchDto: UpdatedStockPickingBatchDto,
  ): Promise<StockPickingBatch> {
    const stockPickingBatch = await this.stockPickingBatchRepository
      .createQueryBuilder('stockPickingBatch')
      .where('stockPickingBatch.id = :id', { id })
      .getOne();
    if (!stockPickingBatch) {
      throw new StockPickingBatchNotFoundException();
    }
    Object.assign(stockPickingBatch, updatedStockPickingBatchDto);
    return await this.stockPickingBatchRepository.save(stockPickingBatch);
  }

  async deleted(id: number): Promise<void> {
    const stockPickingBatch = await this.stockPickingBatchRepository
      .createQueryBuilder('stockPickingBatch')
      .where('stockPickingBatch.id = :id', { id })
      .getOne();
    if (!stockPickingBatch) {
      throw new StockPickingBatchNotFoundException();
    }
    await this.stockPickingBatchRepository.softRemove(stockPickingBatch);
    console.log('stockPickingBatch Eliminado');
  }
}
