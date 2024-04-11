import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionCategory } from './entities/sale-promotion-category.entity';
import { Repository } from 'typeorm';
import { CreateSalePromotionCategoryDto } from './dto/create-sale-promotion-category.dto';
import { SalePromotionCategoryNotFoundException } from './error/sale-promotion-category-not-found.exception';
import { UpdatedSalePromotionCategoryDto } from './dto/updated-sale-promotion-category.dto';

@Injectable()
export class SalePromotionCategoryService {
  constructor(
    @InjectRepository(SalePromotionCategory)
    private readonly salePromotionCategoryRepository: Repository<SalePromotionCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionCategory = await this.salePromotionCategoryRepository
      .createQueryBuilder('salePromotionCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionCategory;
  }

  async create(
    createSalePromotionCategoryDto: CreateSalePromotionCategoryDto,
  ): Promise<SalePromotionCategory> {
    const salePromotionCategory = new SalePromotionCategory(
      createSalePromotionCategoryDto,
    );
    return await this.salePromotionCategoryRepository.save(
      salePromotionCategory,
    );
  }

  async findOne(id: number): Promise<SalePromotionCategory> {
    const salePromotionCategory = await this.salePromotionCategoryRepository
      .createQueryBuilder('salePromotionCategory')
      .where('salePromotionCategory.id = :id', { id })
      .getOne();
    if (!salePromotionCategory) {
      throw new SalePromotionCategoryNotFoundException();
    }
    return salePromotionCategory;
  }

  async updated(
    id: number,
    updatedSalePromotionCategoryDto: UpdatedSalePromotionCategoryDto,
  ): Promise<SalePromotionCategory> {
    const salePromotionCategory = await this.salePromotionCategoryRepository
      .createQueryBuilder('salePromotionCategory')
      .where('salePromotionCategory.id = :id', { id })
      .getOne();
    if (!salePromotionCategory) {
      throw new SalePromotionCategoryNotFoundException();
    }
    Object.assign(salePromotionCategory, updatedSalePromotionCategoryDto);
    return await this.salePromotionCategoryRepository.save(
      salePromotionCategory,
    );
  }

  async deleted(id: number): Promise<void> {
    const salePromotionCategory = await this.salePromotionCategoryRepository
      .createQueryBuilder('salePromotionCategory')
      .where('salePromotionCategory.id = :id', { id })
      .getOne();
    if (!salePromotionCategory) {
      throw new SalePromotionCategoryNotFoundException();
    }
    await this.salePromotionCategoryRepository.softRemove(
      salePromotionCategory,
    );
    console.log('salePromotionCategory Eliminado');
  }
}
