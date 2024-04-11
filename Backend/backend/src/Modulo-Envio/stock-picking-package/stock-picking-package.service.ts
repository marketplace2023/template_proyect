import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockPickingPackage } from './entities/stock-picking-package.entity';
import { CreateStockPickingPackageDto } from './dto/created-stock-picking-package.dto';
import { Repository } from 'typeorm';
import { StockPickingPackageNotFoundException } from './error/stock-picking-package-not-found.exception';
import { UpdatedStockPickingPackageDto } from './dto/updated-stock-picking-package.dto';

@Injectable()
export class StockPickingPackageService {
  constructor(
    @InjectRepository(StockPickingPackage)
    private readonly stockPickingPackageRepository: Repository<StockPickingPackage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockPickingPackage[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockPickingPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockPickingPackage;
  }

  async create(
    createStockPickingPackageDto: CreateStockPickingPackageDto,
  ): Promise<StockPickingPackage> {
    const stockPickingPackage = new StockPickingPackage(
      createStockPickingPackageDto,
    );
    return await this.stockPickingPackageRepository.save(stockPickingPackage);
  }

  async findOne(id: number): Promise<StockPickingPackage> {
    const stockPickingPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .where('stockPickingPackage.id = :id', { id })
      .getOne();
    if (!stockPickingPackage) {
      throw new StockPickingPackageNotFoundException();
    }
    return stockPickingPackage;
  }

  async updated(
    id: number,
    updatedStockPickingPackageDto: UpdatedStockPickingPackageDto,
  ): Promise<StockPickingPackage> {
    const stockPickingPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .where('stockPickingPackage.id = :id', { id })
      .getOne();
    if (!stockPickingPackage) {
      throw new StockPickingPackageNotFoundException();
    }
    Object.assign(stockPickingPackage, updatedStockPickingPackageDto);
    return await this.stockPickingPackageRepository.save(stockPickingPackage);
  }

  async deleted(id: number): Promise<void> {
    const stockPickingPackage = await this.stockPickingPackageRepository
      .createQueryBuilder('stockPickingPackage')
      .where('stockPickingPackage.id = :id', { id })
      .getOne();
    if (!stockPickingPackage) {
      throw new StockPickingPackageNotFoundException();
    }
    await this.stockPickingPackageRepository.softRemove(stockPickingPackage);
    console.log('stockPickingPackage Eliminado');
  }
}
