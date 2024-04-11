import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PosPaymentMethod } from './entities/pos-payment-method.entity';
import { Repository } from 'typeorm';
import { CreatePosPaymentMethodDto } from './dto/create-pos-payment-method.dto';
import { PosPaymentMethodNotFoundException } from './error/pos-payment-method-not-found.exception';
import { UpdatedPosPaymentMethodDto } from './dto/updated-pos-payment-method.dto';

@Injectable()
export class PosPaymentMethodService {
  constructor(
    @InjectRepository(PosPaymentMethod)
    private readonly posPaymentMethodRepository: Repository<PosPaymentMethod>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<PosPaymentMethod[] | undefined> {
    const offset = (page - 1) * perPage;
    const posPaymentMethod = await this.posPaymentMethodRepository
      .createQueryBuilder('posPaymentMethod')
      .take(perPage)
      .skip(offset)
      .getMany();
    return posPaymentMethod;
  }

  async create(
    createPosPaymentMethodDto: CreatePosPaymentMethodDto,
  ): Promise<PosPaymentMethod> {
    const posPaymentMethod = new PosPaymentMethod(createPosPaymentMethodDto);
    return await this.posPaymentMethodRepository.save(posPaymentMethod);
  }

  async findOne(id: number): Promise<PosPaymentMethod> {
    const posPaymentMethod = await this.posPaymentMethodRepository
      .createQueryBuilder('posPaymentMethod')
      .where('posPaymentMethod.id = :id', { id })
      .getOne();
    if (!posPaymentMethod) {
      throw new PosPaymentMethodNotFoundException();
    }
    return posPaymentMethod;
  }

  async updated(
    id: number,
    updatedPosPaymentMethodDto: UpdatedPosPaymentMethodDto,
  ): Promise<PosPaymentMethod> {
    const posPaymentMethod = await this.posPaymentMethodRepository
      .createQueryBuilder('posPaymentMethod')
      .where('posPaymentMethod.id = :id', { id })
      .getOne();
    if (!posPaymentMethod) {
      throw new PosPaymentMethodNotFoundException();
    }
    Object.assign(posPaymentMethod, updatedPosPaymentMethodDto);
    return await this.posPaymentMethodRepository.save(posPaymentMethod);
  }

  async deleted(id: number): Promise<void> {
    const posPaymentMethod = await this.posPaymentMethodRepository
      .createQueryBuilder('posPaymentMethod')
      .where('posPaymentMethod.id = :id', { id })
      .getOne();
    if (!posPaymentMethod) {
      throw new PosPaymentMethodNotFoundException();
    }
    await this.posPaymentMethodRepository.softRemove(posPaymentMethod);
    console.log('posPaymentMethod Eliminado');
  }
}
