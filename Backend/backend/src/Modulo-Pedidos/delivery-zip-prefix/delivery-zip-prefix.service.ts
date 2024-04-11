import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryZipPrefix } from './entities/delivery-zip-prefix.entity';
import { Repository } from 'typeorm';
import { CreateDeliveryZipPrefixDto } from './dto/create-delivery-zip-prefix.dto';
import { UpdatedDeliveryZipPrefixDto } from './dto/updated-delivery-zip-prefix.dto';
import { DeliveryZipPrefixNotFoundException } from './error/delivery-zip-prefix-not-found.exception';

@Injectable()
export class DeliveryZipPrefixService {
  constructor(
    @InjectRepository(DeliveryZipPrefix)
    private readonly deliveryZipPrefixRepository: Repository<DeliveryZipPrefix>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryZipPrefix[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryZipPrefix = await this.deliveryZipPrefixRepository
      .createQueryBuilder('deliveryZipPrefix')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryZipPrefix;
  }

  async create(
    createDeliveryZipPrefixDto: CreateDeliveryZipPrefixDto,
  ): Promise<DeliveryZipPrefix> {
    const deliveryZipPrefix = new DeliveryZipPrefix(createDeliveryZipPrefixDto);
    return await this.deliveryZipPrefixRepository.save(deliveryZipPrefix);
  }

  async findOne(id: number): Promise<DeliveryZipPrefix> {
    const deliveryZipPrefix = await this.deliveryZipPrefixRepository
      .createQueryBuilder('deliveryZipPrefix')
      .where('deliveryZipPrefix.id = :id', { id })
      .getOne();
    if (!deliveryZipPrefix) {
      throw new DeliveryZipPrefixNotFoundException();
    }
    return deliveryZipPrefix;
  }

  async updated(
    id: number,
    updatedDeliveryZipPrefixDto: UpdatedDeliveryZipPrefixDto,
  ): Promise<DeliveryZipPrefix> {
    const deliveryZipPrefix = await this.deliveryZipPrefixRepository
      .createQueryBuilder('deliveryZipPrefix')
      .where('deliveryZipPrefix.id = :id', { id })
      .getOne();
    if (!deliveryZipPrefix) {
      throw new DeliveryZipPrefixNotFoundException();
    }
    Object.assign(deliveryZipPrefix, updatedDeliveryZipPrefixDto);
    return await this.deliveryZipPrefixRepository.save(deliveryZipPrefix);
  }

  async deleted(id: number): Promise<void> {
    const deliveryZipPrefix = await this.deliveryZipPrefixRepository
      .createQueryBuilder('deliveryZipPrefix')
      .where('deliveryZipPrefix.id = :id', { id })
      .getOne();
    if (!deliveryZipPrefix) {
      throw new DeliveryZipPrefixNotFoundException();
    }
    await this.deliveryZipPrefixRepository.softRemove(deliveryZipPrefix);
    console.log('Productos Eliminado');
  }
}
