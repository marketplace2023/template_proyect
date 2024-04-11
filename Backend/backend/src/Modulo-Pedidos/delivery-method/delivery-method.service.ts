import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryMethodNotFoundException } from './error/delivery-method-not-found.exception';
import { UpdatedDeliveryMethodDto } from './dto/updated-delivery-method.dto';
import { DeliveryMethod } from './entities/delivery-method.entity';
import { CreateDeliveryMethodDto } from './dto/created-delivery-method.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryMethodService {
  constructor(
    @InjectRepository(DeliveryMethod)
    private readonly deliveryMethodRepository: Repository<DeliveryMethod>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryMethod[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryMethod = await this.deliveryMethodRepository
      .createQueryBuilder('deliveryMethod')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryMethod;
  }

  async create(
    createDeliveryMethodDto: CreateDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    const deliveryMethod = new DeliveryMethod(createDeliveryMethodDto);
    return await this.deliveryMethodRepository.save(deliveryMethod);
  }

  async findOne(id: number): Promise<DeliveryMethod> {
    const deliveryMethod = await this.deliveryMethodRepository
      .createQueryBuilder('deliveryMethod')
      .where('deliveryMethod.id = :id', { id })
      .getOne();
    if (!deliveryMethod) {
      throw new DeliveryMethodNotFoundException();
    }
    return deliveryMethod;
  }

  async updated(
    id: number,
    updatedDeliveryMethodDto: UpdatedDeliveryMethodDto,
  ): Promise<DeliveryMethod> {
    const deliveryMethod = await this.deliveryMethodRepository
      .createQueryBuilder('deliveryMethod')
      .where('deliveryMethod.id = :id', { id })
      .getOne();
    if (!deliveryMethod) {
      throw new DeliveryMethodNotFoundException();
    }
    Object.assign(deliveryMethod, updatedDeliveryMethodDto);
    return await this.deliveryMethodRepository.save(deliveryMethod);
  }

  async deleted(id: number): Promise<void> {
    const deliveryMethod = await this.deliveryMethodRepository
      .createQueryBuilder('deliveryMethod')
      .where('deliveryMethod.id = :id', { id })
      .getOne();
    if (!deliveryMethod) {
      throw new DeliveryMethodNotFoundException();
    }
    await this.deliveryMethodRepository.softRemove(deliveryMethod);
    console.log('deliveryMethod Eliminado');
  }
}
