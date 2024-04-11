import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IrModuleCategory } from '../ir-module-category/entities/ir-module-category.entity';
import { CreatedIrModuleCategoryDto } from '../ir-module-category/dto/created-ir-module-category.dto';
import { IrModuleCategoryNotFoundException } from '../ir-module-category/error/ir-module-category-not-found.exception';
import { UpdatedIrModuleCategoryDto } from '../ir-module-category/dto/updated-ir-module-category.dto';

@Injectable()
export class IrModuleCategoryService {
  constructor(
    @InjectRepository(IrModuleCategory)
    private readonly irModuleCategoryRepository: Repository<IrModuleCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<IrModuleCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const irModuleCategory = await this.irModuleCategoryRepository
      .createQueryBuilder('irModuleCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return irModuleCategory;
  }

  async create(
    createIrModuleCategoryDto: CreatedIrModuleCategoryDto,
  ): Promise<IrModuleCategory> {
    const irModuleCategory = new IrModuleCategory(createIrModuleCategoryDto);
    return await this.irModuleCategoryRepository.save(irModuleCategory);
  }

  async findOne(id: number): Promise<IrModuleCategory> {
    const irModuleCategory = await this.irModuleCategoryRepository
      .createQueryBuilder('irModuleCategory')
      .where('irModuleCategory.id = :id', { id })
      .getOne();
    if (!irModuleCategory) {
      throw new IrModuleCategoryNotFoundException();
    }
    return irModuleCategory;
  }

  async updated(
    id: number,
    updatedIrModuleCategoryDto: UpdatedIrModuleCategoryDto,
  ): Promise<IrModuleCategory> {
    const irModuleCategory = await this.irModuleCategoryRepository
      .createQueryBuilder('irModuleCategory')
      .where('irModuleCategory.id = :id', { id })
      .getOne();
    if (!irModuleCategory) {
      throw new IrModuleCategoryNotFoundException();
    }
    Object.assign(irModuleCategory, updatedIrModuleCategoryDto);
    return await this.irModuleCategoryRepository.save(irModuleCategory);
  }

  async deleted(id: number): Promise<void> {
    const irModuleCategory = await this.irModuleCategoryRepository
      .createQueryBuilder('irModuleCategory')
      .where('irModuleCategory.id = :id', { id })
      .getOne();
    if (!irModuleCategory) {
      throw new IrModuleCategoryNotFoundException();
    }
    await this.irModuleCategoryRepository.softRemove(irModuleCategory);
  }
}
