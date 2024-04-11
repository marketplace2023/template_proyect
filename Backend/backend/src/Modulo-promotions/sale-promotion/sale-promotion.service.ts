import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdatedSalePromotionDto } from './dto/updated-sale-promotion.dto';
import { SalePromotion } from './entities/sale-promotion.entity';
import { SalePromotionNotFoundException } from './error/sale-promotion-not-found.exception';
import { Repository } from 'typeorm';
import { CreateSalePromotionDto } from './dto/create-sale-promotion.dto';

@Injectable()
export class SalePromotionService {
  constructor(
    @InjectRepository(SalePromotion)
    private readonly salePromotionRepository: Repository<SalePromotion>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotion[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotion = await this.salePromotionRepository
      .createQueryBuilder('salePromotion')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotion;
  }

  async create(
    createSalePromotionDto: CreateSalePromotionDto,
  ): Promise<SalePromotion> {
    const salePromotion = new SalePromotion(createSalePromotionDto);
    return await this.salePromotionRepository.save(salePromotion);
  }

  async findOne(id: number): Promise<SalePromotion> {
    const salePromotion = await this.salePromotionRepository
      .createQueryBuilder('salePromotion')
      .where('salePromotion.id = :id', { id })
      .getOne();
    if (!salePromotion) {
      throw new SalePromotionNotFoundException();
    }
    return salePromotion;
  }

  async updated(
    id: number,
    updatedSalePromotionDto: UpdatedSalePromotionDto,
  ): Promise<SalePromotion> {
    const salePromotion = await this.salePromotionRepository
      .createQueryBuilder('salePromotion')
      .where('salePromotion.id = :id', { id })
      .getOne();
    if (!salePromotion) {
      throw new SalePromotionNotFoundException();
    }
    Object.assign(salePromotion, updatedSalePromotionDto);
    return await this.salePromotionRepository.save(salePromotion);
  }

  async deleted(id: number): Promise<void> {
    const salePromotion = await this.salePromotionRepository
      .createQueryBuilder('salePromotion')
      .where('salePromotion.id = :id', { id })
      .getOne();
    if (!salePromotion) {
      throw new SalePromotionNotFoundException();
    }
    await this.salePromotionRepository.softRemove(salePromotion);
    console.log('salePromotion Eliminado');
  }
}
