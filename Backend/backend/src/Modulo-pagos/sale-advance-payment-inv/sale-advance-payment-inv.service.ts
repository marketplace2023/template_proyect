import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleAdvancePaymentInv } from './entities/sale-advance-payment-inv.entity';
import { Repository } from 'typeorm';
import { CreateSaleAdvancePaymentInvDto } from './dto/create-sale-advance-payment-inv.dto';
import { SaleAdvancePaymentInvNotFoundException } from './error/sale-advance-payment-inv-not-found.exception';
import { UpdatedSaleAdvancePaymentInvDto } from './dto/updated-sale-advance-payment-inv.dto';

@Injectable()
export class SaleAdvancePaymentInvService {
  constructor(
    @InjectRepository(SaleAdvancePaymentInv)
    private readonly saleAdvancePaymentInvRepository: Repository<SaleAdvancePaymentInv>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleAdvancePaymentInv[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleAdvancePaymentInv = await this.saleAdvancePaymentInvRepository
      .createQueryBuilder('saleAdvancePaymentInv')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleAdvancePaymentInv;
  }

  async create(
    createSaleAdvancePaymentInvDto: CreateSaleAdvancePaymentInvDto,
  ): Promise<SaleAdvancePaymentInv> {
    const saleAdvancePaymentInv = new SaleAdvancePaymentInv(
      createSaleAdvancePaymentInvDto,
    );
    return await this.saleAdvancePaymentInvRepository.save(
      saleAdvancePaymentInv,
    );
  }

  async findOne(id: number): Promise<SaleAdvancePaymentInv> {
    const saleAdvancePaymentInv = await this.saleAdvancePaymentInvRepository
      .createQueryBuilder('saleAdvancePaymentInv')
      .where('saleAdvancePaymentInv.id = :id', { id })
      .getOne();
    if (!saleAdvancePaymentInv) {
      throw new SaleAdvancePaymentInvNotFoundException();
    }
    return saleAdvancePaymentInv;
  }

  async updated(
    id: number,
    updatedSaleAdvancePaymentInvDto: UpdatedSaleAdvancePaymentInvDto,
  ): Promise<SaleAdvancePaymentInv> {
    const saleAdvancePaymentInv = await this.saleAdvancePaymentInvRepository
      .createQueryBuilder('saleAdvancePaymentInv')
      .where('saleAdvancePaymentInv.id = :id', { id })
      .getOne();
    if (!saleAdvancePaymentInv) {
      throw new SaleAdvancePaymentInvNotFoundException();
    }
    Object.assign(saleAdvancePaymentInv, updatedSaleAdvancePaymentInvDto);
    return await this.saleAdvancePaymentInvRepository.save(
      saleAdvancePaymentInv,
    );
  }

  async deleted(id: number): Promise<void> {
    const saleAdvancePaymentInv = await this.saleAdvancePaymentInvRepository
      .createQueryBuilder('saleAdvancePaymentInv')
      .where('saleAdvancePaymentInv.id = :id', { id })
      .getOne();
    if (!saleAdvancePaymentInv) {
      throw new SaleAdvancePaymentInvNotFoundException();
    }
    await this.saleAdvancePaymentInvRepository.softRemove(
      saleAdvancePaymentInv,
    );
    console.log('saleAdvancePaymentInv Eliminado');
  }
}
