import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockWarehouse } from './entities/stock-warehouse.entity';
import { Repository } from 'typeorm';
import { CreateStockWarehouseDto } from './dto/created-stock-warehouse.dto';
import { UpdatedStockWarehouseDto } from './dto/updated-stock-warehouse.dto';
import { StockWarehouseNotFoundException } from './error/stock-warehouse-not-found.exception';

@Injectable()
export class StockWarehouseService {
  constructor(
    @InjectRepository(StockWarehouse)
    private readonly stockwarehouseRepository: Repository<StockWarehouse>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockWarehouse[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockwarehouse = await this.stockwarehouseRepository
      .createQueryBuilder('stockwarehouse')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockwarehouse;
  }

  async create(
    createStockwarehouseDto: CreateStockWarehouseDto,
  ): Promise<StockWarehouse> {
    const stockwarehouse = new StockWarehouse(createStockwarehouseDto);
    return await this.stockwarehouseRepository.save(stockwarehouse);
  }

  async findOne(id: number): Promise<StockWarehouse> {
    const stockwarehouse = await this.stockwarehouseRepository
      .createQueryBuilder('stockwarehouse')
      .where('stockwarehouse.id = :id', { id })
      .getOne();
    if (!stockwarehouse) {
      throw new StockWarehouseNotFoundException();
    }
    return stockwarehouse;
  }

  async updated(
    id: number,
    updatedStockwarehouseDto: UpdatedStockWarehouseDto,
  ): Promise<StockWarehouse> {
    const stockwarehouse = await this.stockwarehouseRepository
      .createQueryBuilder('stockwarehouse')
      .where('stockwarehouse.id = :id', { id })
      .getOne();
    if (!stockwarehouse) {
      throw new StockWarehouseNotFoundException();
    }
    Object.assign(stockwarehouse, updatedStockwarehouseDto);
    return await this.stockwarehouseRepository.save(stockwarehouse);
  }

  async deleted(id: number): Promise<void> {
    const stockwarehouse = await this.stockwarehouseRepository
      .createQueryBuilder('stockwarehouse')
      .where('stockwarehouse.id = :id', { id })
      .getOne();
    if (!stockwarehouse) {
      throw new StockWarehouseNotFoundException();
    }
    await this.stockwarehouseRepository.softRemove(stockwarehouse);
    console.log('stockwarehouse Eliminado');
  }
}
