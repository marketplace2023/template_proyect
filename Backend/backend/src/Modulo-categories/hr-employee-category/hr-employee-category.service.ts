import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HrEmployeeCategory } from './entities/hr-employee-category.entity';
import { Repository } from 'typeorm';
import { CreateHrEmployeeCategoryDto } from './dto/create-hr-employee-category.dto';
import { HrEmployeeCategoryNotFoundException } from './error/hr-employee-category-not-found.exception';
import { UpdatedHrEmployeeCategoryDto } from './dto/updated-hr-employee-category.dto';

@Injectable()
export class HrEmployeeCategoryService {
  constructor(
    @InjectRepository(HrEmployeeCategory)
    private readonly hrEmployeeCategoryRepository: Repository<HrEmployeeCategory>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<HrEmployeeCategory[] | undefined> {
    const offset = (page - 1) * perPage;
    const hrEmployeeCategory = await this.hrEmployeeCategoryRepository
      .createQueryBuilder('hrEmployeeCategory')
      .take(perPage)
      .skip(offset)
      .getMany();
    return hrEmployeeCategory;
  }

  async create(
    createHrEmployeeCategoryDto: CreateHrEmployeeCategoryDto,
  ): Promise<HrEmployeeCategory> {
    const hrEmployeeCategory = new HrEmployeeCategory(
      createHrEmployeeCategoryDto,
    );
    return await this.hrEmployeeCategoryRepository.save(hrEmployeeCategory);
  }

  async findOne(id: number): Promise<HrEmployeeCategory> {
    const hrEmployeeCategory = await this.hrEmployeeCategoryRepository
      .createQueryBuilder('hrEmployeeCategory')
      .where('hrEmployeeCategory.id = :id', { id })
      .getOne();
    if (!hrEmployeeCategory) {
      throw new HrEmployeeCategoryNotFoundException();
    }
    return hrEmployeeCategory;
  }

  async updated(
    id: number,
    updatedHrEmployeeCategoryDto: UpdatedHrEmployeeCategoryDto,
  ): Promise<HrEmployeeCategory> {
    const hrEmployeeCategory = await this.hrEmployeeCategoryRepository
      .createQueryBuilder('hrEmployeeCategory')
      .where('hrEmployeeCategory.id = :id', { id })
      .getOne();
    if (!hrEmployeeCategory) {
      throw new HrEmployeeCategoryNotFoundException();
    }
    Object.assign(hrEmployeeCategory, updatedHrEmployeeCategoryDto);
    return await this.hrEmployeeCategoryRepository.save(hrEmployeeCategory);
  }

  async deleted(id: number): Promise<void> {
    const hrEmployeeCategory = await this.hrEmployeeCategoryRepository
      .createQueryBuilder('hrEmployeeCategory')
      .where('hrEmployeeCategory.id = :id', { id })
      .getOne();
    if (!hrEmployeeCategory) {
      throw new HrEmployeeCategoryNotFoundException();
    }
    await this.hrEmployeeCategoryRepository.softRemove(hrEmployeeCategory);
    console.log('hrEmployeeCategory Eliminado');
  }
}
