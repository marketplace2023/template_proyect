import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeliveryPackageNotFoundException } from './error/delivery-package-not-found.exception';
import { DeliveryPackage } from './entities/delivery-package.entity';
import { UpdatedDeliveryPackageDto } from './dto/updated-delivery-package.dto';
import { CreateDeliveryPackageDto } from './dto/created-delivery-package.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DeliveryPackageService {
  constructor(
    @InjectRepository(DeliveryPackage)
    private readonly deliveryPackageRepository: Repository<DeliveryPackage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<DeliveryPackage[] | undefined> {
    const offset = (page - 1) * perPage;
    const deliveryPackage = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return deliveryPackage;
  }

  async create(
    createDeliveryPackageDto: CreateDeliveryPackageDto,
  ): Promise<DeliveryPackage> {
    const deliveryPackage = new DeliveryPackage(createDeliveryPackageDto);
    return await this.deliveryPackageRepository.save(deliveryPackage);
  }

  async findOne(id: number): Promise<DeliveryPackage> {
    const deliveryPackage = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .where('deliveryPackage.id = :id', { id })
      .getOne();
    if (!deliveryPackage) {
      throw new DeliveryPackageNotFoundException();
    }
    return deliveryPackage;
  }

  async updated(
    id: number,
    updatedDeliveryPackageDto: UpdatedDeliveryPackageDto,
  ): Promise<DeliveryPackage> {
    const deliveryPackage = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .where('deliveryPackage.id = :id', { id })
      .getOne();
    if (!deliveryPackage) {
      throw new DeliveryPackageNotFoundException();
    }
    Object.assign(deliveryPackage, updatedDeliveryPackageDto);
    return await this.deliveryPackageRepository.save(deliveryPackage);
  }

  async deleted(id: number): Promise<void> {
    const deliveryPackage = await this.deliveryPackageRepository
      .createQueryBuilder('deliveryPackage')
      .where('deliveryPackage.id = :id', { id })
      .getOne();
    if (!deliveryPackage) {
      throw new DeliveryPackageNotFoundException();
    }
    await this.deliveryPackageRepository.softRemove(deliveryPackage);
    console.log('deliveryPackage Eliminado');
  }
}
