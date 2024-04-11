import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCouponHistory } from './entity/sale-coupon-history.entity';
import { Repository } from 'typeorm';
import { SaleCouponHistoryNotFoundException } from './error/sale-coupon-history-not-found.exception';
import { UpdatedSaleCouponHistoryDto } from './dto/updated-sale-coupon-history.dto';
import { CreateSaleCouponHistoryDto } from './dto/created-sale-coupon-history.dto';

@Injectable()
export class SaleCouponHistoryService {
  constructor(
    @InjectRepository(SaleCouponHistory)
    private readonly saleCouponHistoryRepository: Repository<SaleCouponHistory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCouponHistory[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCouponHistory = await this.saleCouponHistoryRepository
      .createQueryBuilder('saleCouponHistory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCouponHistory;
  }

  async create(
    createSaleCouponHistoryDto: CreateSaleCouponHistoryDto,
  ): Promise<SaleCouponHistory> {
    const saleCouponHistory = new SaleCouponHistory(createSaleCouponHistoryDto);
    return await this.saleCouponHistoryRepository.save(saleCouponHistory);
  }

  async findOne(id: number): Promise<SaleCouponHistory> {
    const saleCouponHistory = await this.saleCouponHistoryRepository
      .createQueryBuilder('saleCouponHistory')
      .where('saleCouponHistory.id = :id', { id })
      .getOne();
    if (!saleCouponHistory) {
      throw new SaleCouponHistoryNotFoundException();
    }
    return saleCouponHistory;
  }

  async updated(
    id: number,
    updatedSaleCouponHistoryDto: UpdatedSaleCouponHistoryDto,
  ): Promise<SaleCouponHistory> {
    const saleCouponHistory = await this.saleCouponHistoryRepository
      .createQueryBuilder('saleCouponHistory')
      .where('saleCouponHistory.id = :id', { id })
      .getOne();
    if (!saleCouponHistory) {
      throw new SaleCouponHistoryNotFoundException();
    }
    Object.assign(saleCouponHistory, updatedSaleCouponHistoryDto);
    return await this.saleCouponHistoryRepository.save(saleCouponHistory);
  }

  async deleted(id: number): Promise<void> {
    const saleCouponHistory = await this.saleCouponHistoryRepository
      .createQueryBuilder('saleCouponHistory')
      .where('saleCouponHistory.id = :id', { id })
      .getOne();
    if (!saleCouponHistory) {
      throw new SaleCouponHistoryNotFoundException();
    }
    await this.saleCouponHistoryRepository.softRemove(saleCouponHistory);
    console.log('saleCouponHistory Eliminado');
  }
}
