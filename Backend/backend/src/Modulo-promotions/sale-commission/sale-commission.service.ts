import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleCommissionNotFoundException } from './error/sale-commission-not-found.exception';
import { SaleCommission } from './entities/sale-commission.entity';
import { UpdatedSaleCommissionDto } from './dto/updated-sale-commission.dto';
import { CreateSaleCommissionDto } from './dto/created-sale-commission.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleCommissionService {
  constructor(
    @InjectRepository(SaleCommission)
    private readonly saleCommissionRepository: Repository<SaleCommission>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleCommission[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleCommission = await this.saleCommissionRepository
      .createQueryBuilder('saleCommission')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleCommission;
  }

  async create(
    createSaleCommissionDto: CreateSaleCommissionDto,
  ): Promise<SaleCommission> {
    const saleCommission = new SaleCommission(createSaleCommissionDto);
    return await this.saleCommissionRepository.save(saleCommission);
  }

  async findOne(id: number): Promise<SaleCommission> {
    const saleCommission = await this.saleCommissionRepository
      .createQueryBuilder('saleCommission')
      .where('saleCommission.id = :id', { id })
      .getOne();
    if (!saleCommission) {
      throw new SaleCommissionNotFoundException();
    }
    return saleCommission;
  }

  async updated(
    id: number,
    updatedSaleCommissionDto: UpdatedSaleCommissionDto,
  ): Promise<SaleCommission> {
    const saleCommission = await this.saleCommissionRepository
      .createQueryBuilder('saleCommission')
      .where('saleCommission.id = :id', { id })
      .getOne();
    if (!saleCommission) {
      throw new SaleCommissionNotFoundException();
    }
    Object.assign(saleCommission, updatedSaleCommissionDto);
    return await this.saleCommissionRepository.save(saleCommission);
  }

  async deleted(id: number): Promise<void> {
    const saleCommission = await this.saleCommissionRepository
      .createQueryBuilder('saleCommission')
      .where('saleCommission.id = :id', { id })
      .getOne();
    if (!saleCommission) {
      throw new SaleCommissionNotFoundException();
    }
    await this.saleCommissionRepository.softRemove(saleCommission);
    console.log('saleCommission Eliminado');
  }
}
