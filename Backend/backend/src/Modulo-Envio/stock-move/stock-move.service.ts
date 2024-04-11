import { Injectable } from '@nestjs/common';
import { StockMoveNotFoundException } from './error/stock-move-not-found.exception';
import { StockMove } from './entities/stock-move.entity';
import { UpdatedStockMoveDto } from './dto/updated-stock-move.dto';
import { CreateStockMoveDto } from './dto/created-stock-move.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StockMoveService {
  constructor(
    @InjectRepository(StockMove)
    private readonly stockMoveRepository: Repository<StockMove>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockMove[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockMove = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockMove;
  }

  async create(createStockMoveDto: CreateStockMoveDto): Promise<StockMove> {
    const stockMove = new StockMove(createStockMoveDto);
    return await this.stockMoveRepository.save(stockMove);
  }

  async findOne(id: number): Promise<StockMove> {
    const stockMove = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .where('stockMove.id = :id', { id })
      .getOne();
    if (!stockMove) {
      throw new StockMoveNotFoundException();
    }
    return stockMove;
  }

  async updated(
    id: number,
    updatedStockMoveDto: UpdatedStockMoveDto,
  ): Promise<StockMove> {
    const stockMove = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .where('stockMove.id = :id', { id })
      .getOne();
    if (!stockMove) {
      throw new StockMoveNotFoundException();
    }
    Object.assign(stockMove, updatedStockMoveDto);
    return await this.stockMoveRepository.save(stockMove);
  }

  async deleted(id: number): Promise<void> {
    const stockMove = await this.stockMoveRepository
      .createQueryBuilder('stockMove')
      .where('stockMove.id = :id', { id })
      .getOne();
    if (!stockMove) {
      throw new StockMoveNotFoundException();
    }
    await this.stockMoveRepository.softRemove(stockMove);
    console.log('stockMove Eliminado');
  }
}
