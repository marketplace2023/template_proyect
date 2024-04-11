import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCouponProgramLineNotFoundException } from './error/sale-coupon-program-line-not-found-exception';
import { SaleCouponProgramLine } from './entities/sale-coupon-program-line.entity';
import { UpdatedSaleCouponProgramLineDto } from './dto/updatedsale-coupon-program-line.dto';
import { CreateSaleCouponProgramLineDto } from './dto/create-sale-coupon-program-line.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleCouponProgramLineService {
  constructor(
    @InjectRepository(SaleCouponProgramLine)
    private readonly saleCouponProgramLineRepository: Repository<SaleCouponProgramLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCouponProgramLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCouponProgramLine = await this.saleCouponProgramLineRepository
      .createQueryBuilder('saleCouponProgramLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCouponProgramLine;
  }

  async create(
    createSaleCouponProgramLineDto: CreateSaleCouponProgramLineDto,
  ): Promise<SaleCouponProgramLine> {
    const saleCouponProgramLine = new SaleCouponProgramLine(
      createSaleCouponProgramLineDto,
    );
    return await this.saleCouponProgramLineRepository.save(
      saleCouponProgramLine,
    );
  }

  async findOne(id: number): Promise<SaleCouponProgramLine> {
    const saleCouponProgramLine = await this.saleCouponProgramLineRepository
      .createQueryBuilder('saleCouponProgramLine')
      .where('saleCouponProgramLine.id = :id', { id })
      .getOne();
    if (!saleCouponProgramLine) {
      throw new SaleCouponProgramLineNotFoundException();
    }
    return saleCouponProgramLine;
  }

  async updated(
    id: number,
    updatedSaleCouponProgramLineDto: UpdatedSaleCouponProgramLineDto,
  ): Promise<SaleCouponProgramLine> {
    const saleCouponProgramLine = await this.saleCouponProgramLineRepository
      .createQueryBuilder('saleCouponProgramLine')
      .where('saleCouponProgramLine.id = :id', { id })
      .getOne();
    if (!saleCouponProgramLine) {
      throw new SaleCouponProgramLineNotFoundException();
    }
    Object.assign(saleCouponProgramLine, updatedSaleCouponProgramLineDto);
    return await this.saleCouponProgramLineRepository.save(
      saleCouponProgramLine,
    );
  }

  async deleted(id: number): Promise<void> {
    const saleCouponProgramLine = await this.saleCouponProgramLineRepository
      .createQueryBuilder('saleCouponProgramLine')
      .where('saleCouponProgramLine.id = :id', { id })
      .getOne();
    if (!saleCouponProgramLine) {
      throw new SaleCouponProgramLineNotFoundException();
    }
    await this.saleCouponProgramLineRepository.softRemove(
      saleCouponProgramLine,
    );
    console.log('saleCouponProgramLine Eliminado');
  }
}
