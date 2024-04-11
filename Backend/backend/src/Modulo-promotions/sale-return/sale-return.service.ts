import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleReturnNotFoundException } from './error/sale-return-not-found.exception';
import { SaleReturn } from './entities/sale-return.entity';
import { UpdatedSaleReturnDto } from './dto/updated-sale-return.dto';
import { CreateSaleReturnDto } from './dto/created-sale-return.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleReturnService {
  constructor(
    @InjectRepository(SaleReturn)
    private readonly saleReturnRepository: Repository<SaleReturn>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleReturn[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleReturn = await this.saleReturnRepository
      .createQueryBuilder('saleReturn')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleReturn;
  }

  async create(createSaleReturnDto: CreateSaleReturnDto): Promise<SaleReturn> {
    const saleReturn = new SaleReturn(createSaleReturnDto);
    return await this.saleReturnRepository.save(saleReturn);
  }

  async findOne(id: number): Promise<SaleReturn> {
    const saleReturn = await this.saleReturnRepository
      .createQueryBuilder('saleReturn')
      .where('saleReturn.id = :id', { id })
      .getOne();
    if (!saleReturn) {
      throw new SaleReturnNotFoundException();
    }
    return saleReturn;
  }

  async updated(
    id: number,
    updatedSaleReturnDto: UpdatedSaleReturnDto,
  ): Promise<SaleReturn> {
    const saleReturn = await this.saleReturnRepository
      .createQueryBuilder('saleReturn')
      .where('saleReturn.id = :id', { id })
      .getOne();
    if (!saleReturn) {
      throw new SaleReturnNotFoundException();
    }
    Object.assign(saleReturn, updatedSaleReturnDto);
    return await this.saleReturnRepository.save(saleReturn);
  }

  async deleted(id: number): Promise<void> {
    const saleReturn = await this.saleReturnRepository
      .createQueryBuilder('saleReturn')
      .where('saleReturn.id = :id', { id })
      .getOne();
    if (!saleReturn) {
      throw new SaleReturnNotFoundException();
    }
    await this.saleReturnRepository.softRemove(saleReturn);
    console.log('saleReturn Eliminado');
  }
}
