import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SaleOrderPayment } from './entities/sale-order-payment.entity';
import { CreateSaleOrderPaymentDto } from './dto/created-sale-order-payment.dto';
import { SaleOrderPaymentNotFoundException } from './error/sale-order-payment-not-found.exception';
import { UpdatedSaleOrderPaymentDto } from './dto/updated-sale-order-payment.dto';

@Injectable()
export class SaleOrderPaymentService {
  constructor(
    @InjectRepository(SaleOrderPayment)
    private readonly saleOrderPaymentRepository: Repository<SaleOrderPayment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleOrderPayment[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleOrderPayment = await this.saleOrderPaymentRepository
      .createQueryBuilder('saleOrderPayment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleOrderPayment;
  }

  async create(
    createSaleOrderPaymentDto: CreateSaleOrderPaymentDto,
  ): Promise<SaleOrderPayment> {
    const saleOrderPayment = new SaleOrderPayment(createSaleOrderPaymentDto);
    return await this.saleOrderPaymentRepository.save(saleOrderPayment);
  }

  async findOne(id: number): Promise<SaleOrderPayment> {
    const saleOrderPayment = await this.saleOrderPaymentRepository
      .createQueryBuilder('saleOrderPayment')
      .where('saleOrderPayment.id = :id', { id })
      .getOne();
    if (!saleOrderPayment) {
      throw new SaleOrderPaymentNotFoundException();
    }
    return saleOrderPayment;
  }

  async updated(
    id: number,
    updatedSaleOrderPaymentDto: UpdatedSaleOrderPaymentDto,
  ): Promise<SaleOrderPayment> {
    const saleOrderPayment = await this.saleOrderPaymentRepository
      .createQueryBuilder('saleOrderPayment')
      .where('saleOrderPayment.id = :id', { id })
      .getOne();
    if (!saleOrderPayment) {
      throw new SaleOrderPaymentNotFoundException();
    }
    Object.assign(saleOrderPayment, updatedSaleOrderPaymentDto);
    return await this.saleOrderPaymentRepository.save(saleOrderPayment);
  }

  async deleted(id: number): Promise<void> {
    const saleOrderPayment = await this.saleOrderPaymentRepository
      .createQueryBuilder('saleOrderPayment')
      .where('saleOrderPayment.id = :id', { id })
      .getOne();
    if (!saleOrderPayment) {
      throw new SaleOrderPaymentNotFoundException();
    }
    await this.saleOrderPaymentRepository.softRemove(saleOrderPayment);
    console.log('saleOrderPayment Eliminado');
  }
}
