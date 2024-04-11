import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalePromotionLine } from './entities/sale-promotion-line.entity';
import { Repository } from 'typeorm';
import { CreateSalePromotionLineDto } from './dto/create-sale-promotion-line.dto';
import { SalePromotionLineNotFoundException } from './error/sale-promotion-line-not-found.exception';
import { UpdatedSalePromotionLineDto } from './dto/updated-sale-promotion-line.dto';

@Injectable()
export class SalePromotionLineService {
  constructor(
    @InjectRepository(SalePromotionLine)
    private readonly salePromotionLineRepository: Repository<SalePromotionLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SalePromotionLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const salePromotionLine = await this.salePromotionLineRepository
      .createQueryBuilder('salePromotionLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return salePromotionLine;
  }

  async create(
    createSalePromotionLineDto: CreateSalePromotionLineDto,
  ): Promise<SalePromotionLine> {
    const salePromotionLine = new SalePromotionLine(createSalePromotionLineDto);
    return await this.salePromotionLineRepository.save(salePromotionLine);
  }

  async findOne(id: number): Promise<SalePromotionLine> {
    const salePromotionLine = await this.salePromotionLineRepository
      .createQueryBuilder('salePromotionLine')
      .where('salePromotionLine.id = :id', { id })
      .getOne();
    if (!salePromotionLine) {
      throw new SalePromotionLineNotFoundException();
    }
    return salePromotionLine;
  }

  async updated(
    id: number,
    updatedSalePromotionLineDto: UpdatedSalePromotionLineDto,
  ): Promise<SalePromotionLine> {
    const salePromotionLine = await this.salePromotionLineRepository
      .createQueryBuilder('salePromotionLine')
      .where('salePromotionLine.id = :id', { id })
      .getOne();
    if (!salePromotionLine) {
      throw new SalePromotionLineNotFoundException();
    }
    Object.assign(salePromotionLine, updatedSalePromotionLineDto);
    return await this.salePromotionLineRepository.save(salePromotionLine);
  }

  async deleted(id: number): Promise<void> {
    const salePromotionLine = await this.salePromotionLineRepository
      .createQueryBuilder('salePromotionLine')
      .where('salePromotionLine.id = :id', { id })
      .getOne();
    if (!salePromotionLine) {
      throw new SalePromotionLineNotFoundException();
    }
    await this.salePromotionLineRepository.softRemove(salePromotionLine);
    console.log('salePromotionCategory Eliminado');
  }
}
