import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleOrderLine } from './entities/sale-order-line.entity';
import { Repository } from 'typeorm';
import { CreateSaleOrderLineDto } from './dto/create-sale-order-line.dto';
import { SaleOrderLineNotFoundException } from './error/sale-order-line-not-found.exception';
import { UpdatedSaleOrderLineDto } from './dto/update-sale-order-line.dto';

@Injectable()
export class SaleOrderLineService {
  constructor(
    @InjectRepository(SaleOrderLine)
    private readonly saleOrderLineRepository: Repository<SaleOrderLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleOrderLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleOrderLine = await this.saleOrderLineRepository
      .createQueryBuilder('saleOrderLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleOrderLine;
  }

  async create(
    createSaleOrderLineDto: CreateSaleOrderLineDto,
  ): Promise<SaleOrderLine> {
    const saleOrderLine = new SaleOrderLine(createSaleOrderLineDto);
    return await this.saleOrderLineRepository.save(saleOrderLine);
  }

  async findOne(id: number): Promise<SaleOrderLine> {
    const saleOrderLine = await this.saleOrderLineRepository
      .createQueryBuilder('saleOrderLine')
      .where('saleOrderLine.id = :id', { id })
      .getOne();
    if (!saleOrderLine) {
      throw new SaleOrderLineNotFoundException();
    }
    return saleOrderLine;
  }

  async updated(
    id: number,
    updatedSaleOrderLineDto: UpdatedSaleOrderLineDto,
  ): Promise<SaleOrderLine> {
    const saleOrderLine = await this.saleOrderLineRepository
      .createQueryBuilder('saleOrderLine')
      .where('saleOrderLine.id = :id', { id })
      .getOne();
    if (!saleOrderLine) {
      throw new SaleOrderLineNotFoundException();
    }
    Object.assign(saleOrderLine, updatedSaleOrderLineDto);
    return await this.saleOrderLineRepository.save(saleOrderLine);
  }

  async deleted(id: number): Promise<void> {
    const saleOrderLine = await this.saleOrderLineRepository
      .createQueryBuilder('saleOrderLine')
      .where('saleOrderLine.id = :id', { id })
      .getOne();
    if (!saleOrderLine) {
      throw new SaleOrderLineNotFoundException();
    }
    await this.saleOrderLineRepository.softRemove(saleOrderLine);
    console.log('Sale Order Line column Eliminado');
  }
}
