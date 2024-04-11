import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockLocationNotFoundException } from './error/stock-location-not-found.exception';
import { CreateStockLocationDto } from './dto/created-stock-location.dto';
import { StockLocation } from './entities/stock-location.entity';
import { UpdatedStockLocationDto } from './dto/updated-stock-location.dto';
import { Repository } from 'typeorm';

@Injectable()
export class StockLocationService {
  constructor(
    @InjectRepository(StockLocation)
    private readonly stockLocationRepository: Repository<StockLocation>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<StockLocation[] | undefined> {
    const offset = (page - 1) * perPage;
    const stockLocation = await this.stockLocationRepository
      .createQueryBuilder('stockLocation')
      .take(perPage)
      .skip(offset)
      .getMany();
    return stockLocation;
  }

  async create(
    createStockLocationDto: CreateStockLocationDto,
  ): Promise<StockLocation> {
    const stockLocation = new StockLocation(createStockLocationDto);
    return await this.stockLocationRepository.save(stockLocation);
  }

  async findOne(id: number): Promise<StockLocation> {
    const stockLocation = await this.stockLocationRepository
      .createQueryBuilder('stockLocation')
      .where('stockLocation.id = :id', { id })
      .getOne();
    if (!stockLocation) {
      throw new StockLocationNotFoundException();
    }
    return stockLocation;
  }

  async updated(
    id: number,
    updatedStockLocationDto: UpdatedStockLocationDto,
  ): Promise<StockLocation> {
    const stockLocation = await this.stockLocationRepository
      .createQueryBuilder('stockLocation')
      .where('stockLocation.id = :id', { id })
      .getOne();
    if (!stockLocation) {
      throw new StockLocationNotFoundException();
    }
    Object.assign(stockLocation, updatedStockLocationDto);
    return await this.stockLocationRepository.save(stockLocation);
  }

  async deleted(id: number): Promise<void> {
    const stockLocation = await this.stockLocationRepository
      .createQueryBuilder('stockLocation')
      .where('stockLocation.id = :id', { id })
      .getOne();
    if (!stockLocation) {
      throw new StockLocationNotFoundException();
    }
    await this.stockLocationRepository.softRemove(stockLocation);
    console.log('stockLocation Eliminado');
  }
}
