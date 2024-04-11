import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PosMakePayment } from './entities/pos-make-payment.entity';
import { Repository } from 'typeorm';
import { CreatePosMakePaymentDto } from './dto/create-pos-make-payment.dto';
import { PosMakePaymentNotFoundException } from './error/pos-make-payment-not-found.exception';
import { UpdatedPosMakePaymentDto } from './dto/updated-pos-make-payment.dto';

@Injectable()
export class PosMakePaymentService {
  constructor(
    @InjectRepository(PosMakePayment)
    private readonly posMakePaymentRepository: Repository<PosMakePayment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PosMakePayment[] | undefined> {
    const offset = (page - 1) * perPage;
    const posMakePayment = await this.posMakePaymentRepository
      .createQueryBuilder('posMakePayment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return posMakePayment;
  }

  async create(
    createPosMakePaymentDto: CreatePosMakePaymentDto,
  ): Promise<PosMakePayment> {
    const posMakePayment = new PosMakePayment(createPosMakePaymentDto);
    return await this.posMakePaymentRepository.save(posMakePayment);
  }

  async findOne(id: number): Promise<PosMakePayment> {
    const posMakePayment = await this.posMakePaymentRepository
      .createQueryBuilder('posMakePayment')
      .where('posMakePayment.id = :id', { id })
      .getOne();
    if (!posMakePayment) {
      throw new PosMakePaymentNotFoundException();
    }
    return posMakePayment;
  }

  async updated(
    id: number,
    updatedPosMakePaymentDto: UpdatedPosMakePaymentDto,
  ): Promise<PosMakePayment> {
    const posMakePayment = await this.posMakePaymentRepository
      .createQueryBuilder('posMakePayment')
      .where('posMakePayment.id = :id', { id })
      .getOne();
    if (!posMakePayment) {
      throw new PosMakePaymentNotFoundException();
    }
    Object.assign(posMakePayment, updatedPosMakePaymentDto);
    return await this.posMakePaymentRepository.save(posMakePayment);
  }

  async deleted(id: number): Promise<void> {
    const posMakePayment = await this.posMakePaymentRepository
      .createQueryBuilder('posMakePayment')
      .where('posMakePayment.id = :id', { id })
      .getOne();
    if (!posMakePayment) {
      throw new PosMakePaymentNotFoundException();
    }
    await this.posMakePaymentRepository.softRemove(posMakePayment);
    console.log('posMakePayment Eliminado');
  }
}
