import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderCategory } from './entities/sale-order-category.entity';
import { CreatedSaleOrderCategoryDto } from './dto/created-sale-order-category-dto';
import { SaleOrderCategoryNotFoundException } from './error/sale-order-category-not-found.exception';
import { UpdatedSaleOrderCategoryDto } from './dto/updated-sale-order-category.dto';

@Injectable()
export class SaleOrderCategoryService {
  constructor(
    @InjectRepository(SaleOrderCategory)
    private readonly saleOrderCategoryRepository: Repository<SaleOrderCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleOrderCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleOrderCategory = await this.saleOrderCategoryRepository
      .createQueryBuilder('saleOrderCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleOrderCategory;
  }

  async create(
    createSaleOrderCategoryDto: CreatedSaleOrderCategoryDto,
  ): Promise<SaleOrderCategory> {
    const saleOrderCategory = new SaleOrderCategory(createSaleOrderCategoryDto);
    return await this.saleOrderCategoryRepository.save(saleOrderCategory);
  }

  async findOne(id: number): Promise<SaleOrderCategory> {
    const saleOrderCategory = await this.saleOrderCategoryRepository
      .createQueryBuilder('saleOrderCategory')
      .where('saleOrderCategory.id = :id', { id })
      .getOne();
    if (!saleOrderCategory) {
      throw new SaleOrderCategoryNotFoundException();
    }
    return saleOrderCategory;
  }

  async updated(
    id: number,
    updatedSaleOrderCategoryDto: UpdatedSaleOrderCategoryDto,
  ): Promise<SaleOrderCategory> {
    const saleOrderCategory = await this.saleOrderCategoryRepository
      .createQueryBuilder('saleOrderCategory')
      .where('saleOrderCategory.id = :id', { id })
      .getOne();
    if (!saleOrderCategory) {
      throw new SaleOrderCategoryNotFoundException();
    }
    Object.assign(saleOrderCategory, updatedSaleOrderCategoryDto);
    return await this.saleOrderCategoryRepository.save(saleOrderCategory);
  }

  async deleted(id: number): Promise<void> {
    const saleOrderCategory = await this.saleOrderCategoryRepository
      .createQueryBuilder('saleOrderCategory')
      .where('saleOrderCategory.id = :id', { id })
      .getOne();
    if (!saleOrderCategory) {
      throw new SaleOrderCategoryNotFoundException();
    }
    await this.saleOrderCategoryRepository.softRemove(saleOrderCategory);
  }
}
