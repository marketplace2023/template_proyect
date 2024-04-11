import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleWishNotFoundException } from './error/sale-wish-not-found.exception';
import { SaleWish } from './entities/sale-wish.entity';
import { UpdatedSaleWishDto } from './dto/updated-sale-wish.dto';
import { CreateSaleWishDto } from './dto/created-sale-wish.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleWishService {
  constructor(
    @InjectRepository(SaleWish)
    private readonly saleWishRepository: Repository<SaleWish>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleWish[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleWish = await this.saleWishRepository
      .createQueryBuilder('saleWish')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleWish;
  }

  async create(createSaleWishDto: CreateSaleWishDto): Promise<SaleWish> {
    const saleWish = new SaleWish(createSaleWishDto);
    return await this.saleWishRepository.save(saleWish);
  }

  async findOne(id: number): Promise<SaleWish> {
    const saleWish = await this.saleWishRepository
      .createQueryBuilder('saleWish')
      .where('saleWish.id = :id', { id })
      .getOne();
    if (!saleWish) {
      throw new SaleWishNotFoundException();
    }
    return saleWish;
  }

  async updated(
    id: number,
    updatedSaleWishDto: UpdatedSaleWishDto,
  ): Promise<SaleWish> {
    const saleWish = await this.saleWishRepository
      .createQueryBuilder('saleWish')
      .where('saleWish.id = :id', { id })
      .getOne();
    if (!saleWish) {
      throw new SaleWishNotFoundException();
    }
    Object.assign(saleWish, updatedSaleWishDto);
    return await this.saleWishRepository.save(saleWish);
  }

  async deleted(id: number): Promise<void> {
    const saleWish = await this.saleWishRepository
      .createQueryBuilder('saleWish')
      .where('saleWish.id = :id', { id })
      .getOne();
    if (!saleWish) {
      throw new SaleWishNotFoundException();
    }
    await this.saleWishRepository.softRemove(saleWish);
    console.log('saleWish Eliminado');
  }
}
