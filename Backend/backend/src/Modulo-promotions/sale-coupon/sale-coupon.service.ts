import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { SaleCoupon } from './entities/sale-coupon.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSaleCouponDto } from './dto/create-sale-coupon.dto';
import { SaleCouponNotFoundException } from './error/sale-coupon-not-found.exception';
import { UpdatedSaleCouponDto } from './dto/updated-sale-coupon.dto';

@Injectable()
export class SaleCouponService {
  constructor(
    @InjectRepository(SaleCoupon)
    private readonly saleCouponRepository: Repository<SaleCoupon>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCoupon[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCoupon = await this.saleCouponRepository
      .createQueryBuilder('saleCoupon')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCoupon;
  }

  async create(createSaleCouponDto: CreateSaleCouponDto): Promise<SaleCoupon> {
    const saleCoupon = new SaleCoupon(createSaleCouponDto);
    return await this.saleCouponRepository.save(saleCoupon);
  }

  async findOne(id: number): Promise<SaleCoupon> {
    const saleCoupon = await this.saleCouponRepository
      .createQueryBuilder('saleCoupon')
      .where('saleCoupon.id = :id', { id })
      .getOne();
    if (!saleCoupon) {
      throw new SaleCouponNotFoundException();
    }
    return saleCoupon;
  }

  async updated(
    id: number,
    updatedSaleCouponDto: UpdatedSaleCouponDto,
  ): Promise<SaleCoupon> {
    const saleCoupon = await this.saleCouponRepository
      .createQueryBuilder('saleCoupon')
      .where('saleCoupon.id = :id', { id })
      .getOne();
    if (!saleCoupon) {
      throw new SaleCouponNotFoundException();
    }
    Object.assign(saleCoupon, updatedSaleCouponDto);
    return await this.saleCouponRepository.save(saleCoupon);
  }

  async deleted(id: number): Promise<void> {
    const saleCoupon = await this.saleCouponRepository
      .createQueryBuilder('saleCoupon')
      .where('saleCoupon.id = :id', { id })
      .getOne();
    if (!saleCoupon) {
      throw new SaleCouponNotFoundException();
    }
    await this.saleCouponRepository.softRemove(saleCoupon);
    console.log('saleCoupon Eliminado');
  }
}
