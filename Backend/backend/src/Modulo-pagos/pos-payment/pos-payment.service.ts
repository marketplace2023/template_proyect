import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePosPaymentDto } from './dto/create-pos-payment.dto';
import { PosPayment } from './entities/pos-payment.entity';
import { PosPaymentNotFoundException } from './error/pos-payment-not-found.exception';
import { UpdatedPosPaymentDto } from './dto/updated-pos-payment.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PosPaymentService {
  constructor(
    @InjectRepository(PosPayment)
    private readonly posPaymentRepository: Repository<PosPayment>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PosPayment[] | undefined> {
    const offset = (page - 1) * perPage;
    const posPayment = await this.posPaymentRepository
      .createQueryBuilder('posPayment')
      .take(perPage)
      .skip(offset)
      .getMany();
    return posPayment;
  }

  async create(createPosPaymentDto: CreatePosPaymentDto): Promise<PosPayment> {
    const posPayment = new PosPayment(createPosPaymentDto);
    return await this.posPaymentRepository.save(posPayment);
  }

  async findOne(id: number): Promise<PosPayment> {
    const posPayment = await this.posPaymentRepository
      .createQueryBuilder('posPayment')
      .where('posPayment.id = :id', { id })
      .getOne();
    if (!posPayment) {
      throw new PosPaymentNotFoundException();
    }
    return posPayment;
  }

  async updated(
    id: number,
    updatedPosPaymentDto: UpdatedPosPaymentDto,
  ): Promise<PosPayment> {
    const posPayment = await this.posPaymentRepository
      .createQueryBuilder('posPayment')
      .where('posPayment.id = :id', { id })
      .getOne();
    if (!posPayment) {
      throw new PosPaymentNotFoundException();
    }
    Object.assign(posPayment, updatedPosPaymentDto);
    return await this.posPaymentRepository.save(posPayment);
  }

  async deleted(id: number): Promise<void> {
    const posPayment = await this.posPaymentRepository
      .createQueryBuilder('posPayment')
      .where('posPayment.id = :id', { id })
      .getOne();
    if (!posPayment) {
      throw new PosPaymentNotFoundException();
    }
    await this.posPaymentRepository.softRemove(posPayment);
    console.log('posPayment Eliminado');
  }
}
