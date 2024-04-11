import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingPackageLineNotFoundException } from './error/stock-picking-package-line-not-found.exception';
import { UpdatedStockPickingPackageLineDto } from './dto/updated-stock-picking-package-line.dto';
import { StockPickingPackageLine } from './entities/stock-picking-package-line.entity';
import { CreateStockPickingPackageLineDto } from './dto/created-stock-picking-package-line.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StockPickingPackageLineService {
  constructor(
    @InjectRepository(StockPickingPackageLine)
    private readonly stockPickingPackageLineRepository: Repository<StockPickingPackageLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingPackageLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingPackageLine = await this.stockPickingPackageLineRepository
      .createQueryBuilder('stockPickingPackageLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingPackageLine;
  }

  async create(
    createStockPickingPackageLineDto: CreateStockPickingPackageLineDto,
  ): Promise<StockPickingPackageLine> {
    const stockPickingPackageLine = new StockPickingPackageLine(
      createStockPickingPackageLineDto,
    );
    return await this.stockPickingPackageLineRepository.save(
      stockPickingPackageLine,
    );
  }

  async findOne(id: number): Promise<StockPickingPackageLine> {
    const stockPickingPackageLine = await this.stockPickingPackageLineRepository
      .createQueryBuilder('stockPickingPackageLine')
      .where('stockPickingPackageLine.id = :id', { id })
      .getOne();
    if (!stockPickingPackageLine) {
      throw new StockPickingPackageLineNotFoundException();
    }
    return stockPickingPackageLine;
  }

  async updated(
    id: number,
    updatedStockPickingPackageLineDto: UpdatedStockPickingPackageLineDto,
  ): Promise<StockPickingPackageLine> {
    const stockPickingPackageLine = await this.stockPickingPackageLineRepository
      .createQueryBuilder('stockPickingPackageLine')
      .where('stockPickingPackageLine.id = :id', { id })
      .getOne();
    if (!stockPickingPackageLine) {
      throw new StockPickingPackageLineNotFoundException();
    }
    Object.assign(stockPickingPackageLine, updatedStockPickingPackageLineDto);
    return await this.stockPickingPackageLineRepository.save(
      stockPickingPackageLine,
    );
  }

  async deleted(id: number): Promise<void> {
    const stockPickingPackageLine = await this.stockPickingPackageLineRepository
      .createQueryBuilder('stockPickingPackageLine')
      .where('stockPickingPackageLine.id = :id', { id })
      .getOne();
    if (!stockPickingPackageLine) {
      throw new StockPickingPackageLineNotFoundException();
    }
    await this.stockPickingPackageLineRepository.softRemove(
      stockPickingPackageLine,
    );
    console.log('stockPickingPackageLine Eliminado');
  }
}
