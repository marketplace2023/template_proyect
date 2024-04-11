import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCouponProgramNotFoundException } from './error/sale-coupon-program-not-found.exception';
import { UpdatedSaleCouponProgramDto } from './dto/updated-sale-coupon-program.dto';
import { SaleCouponProgram } from './entities/sale-coupon-program.entity';
import { CreateSaleCouponProgramDto } from './dto/create-sale-coupon-program.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleCouponProgramService {
  constructor(
    @InjectRepository(SaleCouponProgram)
    private readonly saleCouponProgramRepository: Repository<SaleCouponProgram>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCouponProgram[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCouponProgram = await this.saleCouponProgramRepository
      .createQueryBuilder('saleCouponProgram')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCouponProgram;
  }

  async create(
    createSaleCouponProgramDto: CreateSaleCouponProgramDto,
  ): Promise<SaleCouponProgram> {
    const saleCouponProgram = new SaleCouponProgram(createSaleCouponProgramDto);
    return await this.saleCouponProgramRepository.save(saleCouponProgram);
  }

  async findOne(id: number): Promise<SaleCouponProgram> {
    const saleCouponProgram = await this.saleCouponProgramRepository
      .createQueryBuilder('saleCouponProgram')
      .where('saleCouponProgram.id = :id', { id })
      .getOne();
    if (!saleCouponProgram) {
      throw new SaleCouponProgramNotFoundException();
    }
    return saleCouponProgram;
  }

  async updated(
    id: number,
    updatedSaleCouponProgramDto: UpdatedSaleCouponProgramDto,
  ): Promise<SaleCouponProgram> {
    const saleCouponProgram = await this.saleCouponProgramRepository
      .createQueryBuilder('saleCouponProgram')
      .where('saleCouponProgram.id = :id', { id })
      .getOne();
    if (!saleCouponProgram) {
      throw new SaleCouponProgramNotFoundException();
    }
    Object.assign(saleCouponProgram, updatedSaleCouponProgramDto);
    return await this.saleCouponProgramRepository.save(saleCouponProgram);
  }

  async deleted(id: number): Promise<void> {
    const saleCouponProgram = await this.saleCouponProgramRepository
      .createQueryBuilder('saleCouponProgram')
      .where('saleCouponProgram.id = :id', { id })
      .getOne();
    if (!saleCouponProgram) {
      throw new SaleCouponProgramNotFoundException();
    }
    await this.saleCouponProgramRepository.softRemove(saleCouponProgram);
    console.log('saleCouponProgram Eliminado');
  }
}
