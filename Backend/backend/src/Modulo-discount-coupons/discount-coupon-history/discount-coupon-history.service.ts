import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountCouponHistoryNotFoundException } from './error/discount-coupon-history-not-found.exception';
import { UpdatedDiscountCouponHistoryDto } from './dto/updated-discount-coupon-history.dto';
import { DiscountCouponHistory } from './entities/discount-coupon-history.entity';
import { CreateDiscountCouponHistoryDto } from './dto/created-discount-coupon-history.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DiscountCouponHistoryService {
  constructor(
    @InjectRepository(DiscountCouponHistory)
    private readonly discountCouponHistoryRepository: Repository<DiscountCouponHistory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DiscountCouponHistory[] | undefined> {
    const offset = (page - 1) * perPage;
    const discountCouponHistory = await this.discountCouponHistoryRepository
      .createQueryBuilder('discountCouponHistory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return discountCouponHistory;
  }

  async create(
    createDiscountCouponHistoryDto: CreateDiscountCouponHistoryDto,
  ): Promise<DiscountCouponHistory> {
    const discountCouponHistory = new DiscountCouponHistory(
      createDiscountCouponHistoryDto,
    );
    return await this.discountCouponHistoryRepository.save(
      discountCouponHistory,
    );
  }

  async findOne(id: number): Promise<DiscountCouponHistory> {
    const discountCouponHistory = await this.discountCouponHistoryRepository
      .createQueryBuilder('discountCouponHistory')
      .where('discountCouponHistory.id = :id', { id })
      .getOne();
    if (!discountCouponHistory) {
      throw new DiscountCouponHistoryNotFoundException();
    }
    return discountCouponHistory;
  }

  async updated(
    id: number,
    updatedDiscountCouponHistoryDto: UpdatedDiscountCouponHistoryDto,
  ): Promise<DiscountCouponHistory> {
    const discountCouponHistory = await this.discountCouponHistoryRepository
      .createQueryBuilder('discountCouponHistory')
      .where('discountCouponHistory.id = :id', { id })
      .getOne();
    if (!discountCouponHistory) {
      throw new DiscountCouponHistoryNotFoundException();
    }
    Object.assign(discountCouponHistory, updatedDiscountCouponHistoryDto);
    return await this.discountCouponHistoryRepository.save(
      discountCouponHistory,
    );
  }

  async deleted(id: number): Promise<void> {
    const discountCouponHistory = await this.discountCouponHistoryRepository
      .createQueryBuilder('discountCouponHistory')
      .where('discountCouponHistory.id = :id', { id })
      .getOne();
    if (!discountCouponHistory) {
      throw new DiscountCouponHistoryNotFoundException();
    }
    await this.discountCouponHistoryRepository.softRemove(
      discountCouponHistory,
    );
    console.log('discountCouponHistory Eliminado');
  }
}
