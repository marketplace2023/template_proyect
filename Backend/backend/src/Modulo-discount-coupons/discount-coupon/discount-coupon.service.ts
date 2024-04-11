import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DiscountCouponNotFoundException } from './error/discount-coupon-not-found.exception';
import { UpdatedDiscountCouponDto } from './dto/updated-discount-coupon.dto';
import { DiscountCoupon } from './entities/discount-coupon.entity';
import { CreateDiscountCouponDto } from './dto/created-discount-coupon.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DiscountCouponService {
  constructor(
    @InjectRepository(DiscountCoupon)
    private readonly discountCouponyRepository: Repository<DiscountCoupon>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DiscountCoupon[] | undefined> {
    const offset = (page - 1) * perPage;
    const discountCoupony = await this.discountCouponyRepository
      .createQueryBuilder('discountCoupony')
      .take(perPage)
      .skip(offset)
      .getMany();
    return discountCoupony;
  }

  async create(
    createDiscountCouponDto: CreateDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    const discountCoupony = new DiscountCoupon(createDiscountCouponDto);
    return await this.discountCouponyRepository.save(discountCoupony);
  }

  async findOne(id: number): Promise<DiscountCoupon> {
    const discountCoupony = await this.discountCouponyRepository
      .createQueryBuilder('discountCoupony')
      .where('discountCoupony.id = :id', { id })
      .getOne();
    if (!discountCoupony) {
      throw new DiscountCouponNotFoundException();
    }
    return discountCoupony;
  }

  async updated(
    id: number,
    updatedDiscountCouponDto: UpdatedDiscountCouponDto,
  ): Promise<DiscountCoupon> {
    const discountCoupony = await this.discountCouponyRepository
      .createQueryBuilder('discountCoupony')
      .where('discountCoupony.id = :id', { id })
      .getOne();
    if (!discountCoupony) {
      throw new DiscountCouponNotFoundException();
    }
    Object.assign(discountCoupony, updatedDiscountCouponDto);
    return await this.discountCouponyRepository.save(discountCoupony);
  }

  async deleted(id: number): Promise<void> {
    const discountCoupony = await this.discountCouponyRepository
      .createQueryBuilder('discountCoupony')
      .where('discountCoupony.id = :id', { id })
      .getOne();
    if (!discountCoupony) {
      throw new DiscountCouponNotFoundException();
    }
    await this.discountCouponyRepository.softRemove(discountCoupony);
    console.log('discountCoupony Eliminado');
  }
}
