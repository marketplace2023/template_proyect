import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleShop } from './entities/sale-shop.entity';
import { CreateSaleShopDto } from './dto/created-sale-shop.dto';
import { SaleShopNotFoundException } from './error/sale-shop-not-found.exception';
import { UpdatedSaleShopDto } from './dto/updated-sale-shop.dto';

@Injectable()
export class SaleShopService {
  constructor(
    @InjectRepository(SaleShop)
    private readonly saleShopRepository: Repository<SaleShop>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleShop[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleShop = await this.saleShopRepository
      .createQueryBuilder('saleShop')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleShop;
  }

  async create(createSaleShopDto: CreateSaleShopDto): Promise<SaleShop> {
    const saleShop = new SaleShop(createSaleShopDto);
    return await this.saleShopRepository.save(saleShop);
  }

  async findOne(id: number): Promise<SaleShop> {
    const saleShop = await this.saleShopRepository
      .createQueryBuilder('saleShop')
      .where('saleShop.id = :id', { id })
      .getOne();
    if (!saleShop) {
      throw new SaleShopNotFoundException();
    }
    return saleShop;
  }

  async updated(
    id: number,
    updatedSaleShopDto: UpdatedSaleShopDto,
  ): Promise<SaleShop> {
    const saleShop = await this.saleShopRepository
      .createQueryBuilder('saleShop')
      .where('saleShop.id = :id', { id })
      .getOne();
    if (!saleShop) {
      throw new SaleShopNotFoundException();
    }
    Object.assign(saleShop, updatedSaleShopDto);
    return await this.saleShopRepository.save(saleShop);
  }

  async deleted(id: number): Promise<void> {
    const saleShop = await this.saleShopRepository
      .createQueryBuilder('saleShop')
      .where('saleShop.id = :id', { id })
      .getOne();
    if (!saleShop) {
      throw new SaleShopNotFoundException();
    }
    await this.saleShopRepository.softRemove(saleShop);
    console.log('saleShop Eliminado');
  }
}
