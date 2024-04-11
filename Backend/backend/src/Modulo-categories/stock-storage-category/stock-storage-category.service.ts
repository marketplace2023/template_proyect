import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockStorageCategory } from './entities/stock-storage-category.entity';
import { Repository } from 'typeorm';
import { StockStorageCategoryCapacityNotFoundException } from '../stock-storage-category-capacity/error/stock-storage-category-capacity-not-found.exception';
import { UpdatedStockStorageCategoryDto } from './dto/updated-stock-storage-category.dto';
import { StockStorageCategoryNotFoundException } from './error/stock-store-category-not-found.exception';
import { CreatedStockStorageCategoryDto } from './dto/created-stock-storage-category.dto';

@Injectable()
export class StockStorageCategoryService {
  constructor(
    @InjectRepository(StockStorageCategory)
    private readonly stockStorageCategoryRepository: Repository<StockStorageCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockStorageCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockStorageCategory = await this.stockStorageCategoryRepository
      .createQueryBuilder('stockStorageCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockStorageCategory;
  }

  async create(
    createStockStorageCategoryDto: CreatedStockStorageCategoryDto,
  ): Promise<StockStorageCategory> {
    const stockStorageCategory = new StockStorageCategory(
      createStockStorageCategoryDto,
    );
    return await this.stockStorageCategoryRepository.save(stockStorageCategory);
  }

  async findOne(id: number): Promise<StockStorageCategory> {
    const stockStorageCategory = await this.stockStorageCategoryRepository
      .createQueryBuilder('stockStorageCategory')
      .where('stockStorageCategory.id = :id', { id })
      .getOne();
    if (!stockStorageCategory) {
      throw new StockStorageCategoryNotFoundException();
    }
    return stockStorageCategory;
  }

  async updated(
    id: number,
    updatedStockStorageCategoryDto: UpdatedStockStorageCategoryDto,
  ): Promise<StockStorageCategory> {
    const stockStorageCategory = await this.stockStorageCategoryRepository
      .createQueryBuilder('stockStorageCategory')
      .where('stockStorageCategory.id = :id', { id })
      .getOne();
    if (!stockStorageCategory) {
      throw new StockStorageCategoryNotFoundException();
    }
    Object.assign(stockStorageCategory, updatedStockStorageCategoryDto);
    return await this.stockStorageCategoryRepository.save(stockStorageCategory);
  }

  async deleted(id: number): Promise<void> {
    const stockStorageCategory = await this.stockStorageCategoryRepository
      .createQueryBuilder('stockStorageCategory')
      .where('stockStorageCategory.id = :id', { id })
      .getOne();
    if (!stockStorageCategory) {
      throw new StockStorageCategoryCapacityNotFoundException();
    }
    await this.stockStorageCategoryRepository.softRemove(stockStorageCategory);
  }
}
