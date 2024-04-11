import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockStorageCategoryCapacityNotFoundException } from './error/stock-storage-category-capacity-not-found.exception';
import { UpdatedStockStorageCategoryCapacityDto } from './dto/updated-storage-category-capacity.dto';
import { StockStorageCategoryCapacity } from './entities/stock-storage-category-capacity.entity';
import { CreateStockStorageCategoryCapacityDto } from './dto/create-stock-storage-category-capacity.dto';

@Injectable()
export class StockStorageCategoryCapacityService {
  constructor(
    @InjectRepository(StockStorageCategoryCapacity)
    private readonly stockStorageCategoryCapacityRepository: Repository<StockStorageCategoryCapacity>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockStorageCategoryCapacity[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockStorageCategoryCapacity =
      await this.stockStorageCategoryCapacityRepository
        .createQueryBuilder('stockStorageCategoryCapacity')
        .take(perPage)
        .skip(offset)
        .getMany();
    return stockStorageCategoryCapacity;
  }

  async create(
    createStockStorageCategoryCapacityDto: CreateStockStorageCategoryCapacityDto,
  ): Promise<StockStorageCategoryCapacity> {
    const stockStorageCategoryCapacity = new StockStorageCategoryCapacity(
      createStockStorageCategoryCapacityDto,
    );
    return await this.stockStorageCategoryCapacityRepository.save(
      stockStorageCategoryCapacity,
    );
  }

  async findOne(id: number): Promise<StockStorageCategoryCapacity> {
    const stockStorageCategoryCapacity =
      await this.stockStorageCategoryCapacityRepository
        .createQueryBuilder('stockStorageCategoryCapacity')
        .where('stockStorageCategoryCapacity.id = :id', { id })
        .getOne();
    if (!stockStorageCategoryCapacity) {
      throw new StockStorageCategoryCapacityNotFoundException();
    }
    return stockStorageCategoryCapacity;
  }

  async updated(
    id: number,
    updatedStockStorageCategoryCapacityDto: UpdatedStockStorageCategoryCapacityDto,
  ): Promise<StockStorageCategoryCapacity> {
    const stockStorageCategoryCapacity =
      await this.stockStorageCategoryCapacityRepository
        .createQueryBuilder('stockStorageCategoryCapacity')
        .where('stockStorageCategoryCapacity.id = :id', { id })
        .getOne();
    if (!stockStorageCategoryCapacity) {
      throw new StockStorageCategoryCapacityNotFoundException();
    }
    Object.assign(
      stockStorageCategoryCapacity,
      updatedStockStorageCategoryCapacityDto,
    );
    return await this.stockStorageCategoryCapacityRepository.save(
      stockStorageCategoryCapacity,
    );
  }

  async deleted(id: number): Promise<void> {
    const stockStorageCategoryCapacity =
      await this.stockStorageCategoryCapacityRepository
        .createQueryBuilder('stockStorageCategoryCapacity')
        .where('stockStorageCategoryCapacity.id = :id', { id })
        .getOne();
    if (!stockStorageCategoryCapacity) {
      throw new StockStorageCategoryCapacityNotFoundException();
    }
    await this.stockStorageCategoryCapacityRepository.softRemove(
      stockStorageCategoryCapacity,
    );
    console.log('stockStorageCategoryCapacity Eliminado');
  }
}
