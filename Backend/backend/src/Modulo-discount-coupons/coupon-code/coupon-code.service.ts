import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCouponCodeDto } from './dto/created-coupon-code.dto';
import { CouponCode } from './entities/coupon-code.entity';
import { Repository } from 'typeorm';
import { CouponCodeNotFoundException } from './error/coupon-code-not-found.exception';
import { UpdatedCouponCodeDto } from './dto/updated-coupon-code.dto';

@Injectable()
export class CouponCodeService {
  constructor(
    @InjectRepository(CouponCode)
    private readonly couponCodeRepository: Repository<CouponCode>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<CouponCode[] | undefined> {
    const offset = (page - 1) * perPage;
    const couponCode = await this.couponCodeRepository
      .createQueryBuilder('couponCode')
      .take(perPage)
      .skip(offset)
      .getMany();
    return couponCode;
  }

  async create(createCouponCodeDto: CreateCouponCodeDto): Promise<CouponCode> {
    const couponCode = new CouponCode(createCouponCodeDto);
    return await this.couponCodeRepository.save(couponCode);
  }

  async findOne(id: number): Promise<CouponCode> {
    const couponCode = await this.couponCodeRepository
      .createQueryBuilder('couponCode')
      .where('couponCode.id = :id', { id })
      .getOne();
    if (!couponCode) {
      throw new CouponCodeNotFoundException();
    }
    return couponCode;
  }

  async updated(
    id: number,
    updatedCouponCodeDto: UpdatedCouponCodeDto,
  ): Promise<CouponCode> {
    const couponCode = await this.couponCodeRepository
      .createQueryBuilder('couponCode')
      .where('couponCode.id = :id', { id })
      .getOne();
    if (!couponCode) {
      throw new CouponCodeNotFoundException();
    }
    Object.assign(couponCode, updatedCouponCodeDto);
    return await this.couponCodeRepository.save(couponCode);
  }

  async deleted(id: number): Promise<void> {
    const couponCode = await this.couponCodeRepository
      .createQueryBuilder('couponCode')
      .where('couponCode.id = :id', { id })
      .getOne();
    if (!couponCode) {
      throw new CouponCodeNotFoundException();
    }
    await this.couponCodeRepository.softRemove(couponCode);
    console.log('couponCode Eliminado');
  }
}
