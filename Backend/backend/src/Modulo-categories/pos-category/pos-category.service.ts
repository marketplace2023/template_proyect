import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PosCategory } from './entities/pos-category.entity';
import { Repository } from 'typeorm';
import { CreatePosCategoryDto } from './dto/create-pos-category.dto';
import { PosCategoryNotFoundException } from './error/pos-category-not-found.exception';
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';

@Injectable()
export class PosCategoryService {
  constructor(
    @InjectRepository(PosCategory)
    private readonly posCategoryRepository: Repository<PosCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PosCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const posCategory = await this.posCategoryRepository
      .createQueryBuilder('posCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return posCategory;
  }

  async create(
    createPosCategoryDto: CreatePosCategoryDto,
  ): Promise<PosCategory> {
    const posCategory = new PosCategory(createPosCategoryDto);
    return await this.posCategoryRepository.save(posCategory);
  }

  async findOne(id: number): Promise<PosCategory> {
    const posCategory = await this.posCategoryRepository
      .createQueryBuilder('posCategory')
      .where('posCategory.id = :id', { id })
      .getOne();
    if (!posCategory) {
      throw new PosCategoryNotFoundException();
    }
    return posCategory;
  }

  async updated(
    id: number,
    updatedPosCategoryDto: UpdatedProductsCategoryDto,
  ): Promise<PosCategory> {
    const posCategory = await this.posCategoryRepository
      .createQueryBuilder('posCategory')
      .where('posCategory.id = :id', { id })
      .getOne();
    if (!posCategory) {
      throw new PosCategoryNotFoundException();
    }
    Object.assign(posCategory, updatedPosCategoryDto);
    return await this.posCategoryRepository.save(posCategory);
  }

  async deleted(id: number): Promise<void> {
    const posCategory = await this.posCategoryRepository
      .createQueryBuilder('posCategory')
      .where('posCategory.id = :id', { id })
      .getOne();
    if (!posCategory) {
      throw new PosCategoryNotFoundException();
    }
    await this.posCategoryRepository.softRemove(posCategory);
    console.log('posCategory Eliminado');
  }
}
