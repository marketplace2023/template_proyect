import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountCouponLine } from './entities/discount-coupon-line.entity';
import { Repository } from 'typeorm';
import { CreateDiscountCouponLineDto } from './dto/created-discount-coupon-line.dto';
import { DiscountCouponLineNotFoundException } from './error/discount-coupon-line-not-found-exception';
import { UpdatedDiscountCouponLineDto } from './dto/updated-discount-coupon-line.dto';

@Injectable()
export class DiscountCouponLineService {
  constructor(
    @InjectRepository(DiscountCouponLine)
    private readonly discountCouponLineRepository: Repository<DiscountCouponLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DiscountCouponLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const discountCouponLine = await this.discountCouponLineRepository
      .createQueryBuilder('discountCouponLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return discountCouponLine;
  }

  async create(
    createDiscountCouponLineDto: CreateDiscountCouponLineDto,
  ): Promise<DiscountCouponLine> {
    const discountCouponLine = new DiscountCouponLine(
      createDiscountCouponLineDto,
    );
    return await this.discountCouponLineRepository.save(discountCouponLine);
  }

  async findOne(id: number): Promise<DiscountCouponLine> {
    const discountCouponLine = await this.discountCouponLineRepository
      .createQueryBuilder('discountCouponLine')
      .where('discountCouponLine.id = :id', { id })
      .getOne();
    if (!discountCouponLine) {
      throw new DiscountCouponLineNotFoundException();
    }
    return discountCouponLine;
  }

  async updated(
    id: number,
    updatedDiscountCouponLineDto: UpdatedDiscountCouponLineDto,
  ): Promise<DiscountCouponLine> {
    const discountCouponLine = await this.discountCouponLineRepository
      .createQueryBuilder('discountCouponLine')
      .where('discountCouponLine.id = :id', { id })
      .getOne();
    if (!discountCouponLine) {
      throw new DiscountCouponLineNotFoundException();
    }
    Object.assign(discountCouponLine, updatedDiscountCouponLineDto);
    return await this.discountCouponLineRepository.save(discountCouponLine);
  }

  async deleted(id: number): Promise<void> {
    const discountCouponLine = await this.discountCouponLineRepository
      .createQueryBuilder('discountCouponLine')
      .where('discountCouponLine.id = :id', { id })
      .getOne();
    if (!discountCouponLine) {
      throw new DiscountCouponLineNotFoundException();
    }
    await this.discountCouponLineRepository.softRemove(discountCouponLine);
    console.log('discountCouponLine Eliminado');
  }
}
