import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionCodeNotFoundException } from './error/sale-promotion-code-not-found.exception';
import { UpdatedSalePromotionCodeDto } from './dto/updated-sale-promotion-code.dto';
import { SalePromotionCode } from './entities/sale-promotion-code.entity';
import { CreateSalePromotionCodeDto } from './dto/created-sale-promotion-code.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SalePromotionCodeService {
  constructor(
    @InjectRepository(SalePromotionCode)
    private readonly salePromotionCodeRepository: Repository<SalePromotionCode>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionCode[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionCode = await this.salePromotionCodeRepository
      .createQueryBuilder('salePromotionCode')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionCode;
  }

  async create(
    createSalePromotionCodeDto: CreateSalePromotionCodeDto,
  ): Promise<SalePromotionCode> {
    const salePromotionCode = new SalePromotionCode(createSalePromotionCodeDto);
    return await this.salePromotionCodeRepository.save(salePromotionCode);
  }

  async findOne(id: number): Promise<SalePromotionCode> {
    const salePromotionCode = await this.salePromotionCodeRepository
      .createQueryBuilder('salePromotionCode')
      .where('salePromotionCode.id = :id', { id })
      .getOne();
    if (!salePromotionCode) {
      throw new SalePromotionCodeNotFoundException();
    }
    return salePromotionCode;
  }

  async updated(
    id: number,
    updatedSalePromotionCodeDto: UpdatedSalePromotionCodeDto,
  ): Promise<SalePromotionCode> {
    const salePromotionCode = await this.salePromotionCodeRepository
      .createQueryBuilder('salePromotionCode')
      .where('salePromotionCode.id = :id', { id })
      .getOne();
    if (!salePromotionCode) {
      throw new SalePromotionCodeNotFoundException();
    }
    Object.assign(salePromotionCode, updatedSalePromotionCodeDto);
    return await this.salePromotionCodeRepository.save(salePromotionCode);
  }

  async deleted(id: number): Promise<void> {
    const salePromotionCode = await this.salePromotionCodeRepository
      .createQueryBuilder('salePromotionCode')
      .where('salePromotionCode.id = :id', { id })
      .getOne();
    if (!salePromotionCode) {
      throw new SalePromotionCodeNotFoundException();
    }
    await this.salePromotionCodeRepository.softRemove(salePromotionCode);
    console.log('salePromotionCode Eliminado');
  }
}
