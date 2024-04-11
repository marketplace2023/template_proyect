import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingLine } from './entities/stock-picking-line.entity';
import { Repository } from 'typeorm';
import { CreateStockPickingLineDto } from './dto/created-stock-picking-line.dto';
import { StockPickingLineNotFoundException } from './error/stock-picking-line-not-found.exception';
import { UpdatedStockPickingLineDto } from './dto/updated-stock-picking-line.dto';

@Injectable()
export class StockPickingLineService {
  constructor(
    @InjectRepository(StockPickingLine)
    private readonly stockPickingLineRepository: Repository<StockPickingLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingLine = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingLine;
  }
  async create(
    createStockPickingLineDto: CreateStockPickingLineDto,
  ): Promise<StockPickingLine> {
    const stockPickingLine = new StockPickingLine(createStockPickingLineDto);
    return await this.stockPickingLineRepository.save(stockPickingLine);
  }
  async findOne(id: number): Promise<StockPickingLine> {
    const stockPickingLine = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .where('stockPickingLine.id = :id', { id })
      .getOne();
    if (!stockPickingLine) {
      throw new StockPickingLineNotFoundException();
    }
    return stockPickingLine;
  }
  async updated(
    id: number,
    updatedStockPickingLineDto: UpdatedStockPickingLineDto,
  ): Promise<StockPickingLine> {
    const stockPickingLine = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .where('stockPickingLine.id = :id', { id })
      .getOne();
    if (!stockPickingLine) {
      throw new StockPickingLineNotFoundException();
    }
    Object.assign(stockPickingLine, updatedStockPickingLineDto);
    return await this.stockPickingLineRepository.save(stockPickingLine);
  }
  async deleted(id: number): Promise<void> {
    const stockPickingLine = await this.stockPickingLineRepository
      .createQueryBuilder('stockPickingLine')
      .where('stockPickingLine.id = :id', { id })
      .getOne();
    if (!stockPickingLine) {
      throw new StockPickingLineNotFoundException();
    }
    await this.stockPickingLineRepository.softRemove(stockPickingLine);
    console.log('Stock Picking Line column Eliminado');
  }
}
