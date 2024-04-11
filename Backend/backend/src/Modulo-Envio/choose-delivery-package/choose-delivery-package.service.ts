import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChooseDeliveryPackage } from './entities/choose-delivery-package.entity';
import { Repository } from 'typeorm';
import { CreateChooseDeliveryPackageDto } from './dto/create-choose-delivery-package.dto';
import { ChooseDeliveryPackageNotFoundException } from './error/choose-delivery-package-not-found.exception';
import { UpdatedChooseDeliveryPackageDto } from './dto/updated-choose-delivery-package.dto';

@Injectable()
export class ChooseDeliveryPackageService {
  constructor(
    @InjectRepository(ChooseDeliveryPackage)
    private readonly chooseDeliveryPackageRepository: Repository<ChooseDeliveryPackage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<ChooseDeliveryPackage[] | undefined> {
    const offset = (page - 1) * perPage;
    const chooseDeliveryPackage = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return chooseDeliveryPackage;
  }

  async create(
    createChooseDeliveryPackageDto: CreateChooseDeliveryPackageDto,
  ): Promise<ChooseDeliveryPackage> {
    const chooseDeliveryPackage = new ChooseDeliveryPackage(
      createChooseDeliveryPackageDto,
    );
    return await this.chooseDeliveryPackageRepository.save(
      chooseDeliveryPackage,
    );
  }

  async findOne(id: number): Promise<ChooseDeliveryPackage> {
    const chooseDeliveryPackage = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .where('chooseDeliveryPackage.id = :id', { id })
      .getOne();
    if (!chooseDeliveryPackage) {
      throw new ChooseDeliveryPackageNotFoundException();
    }
    return chooseDeliveryPackage;
  }

  async updated(
    id: number,
    updatedChooseDeliveryPackageDto: UpdatedChooseDeliveryPackageDto,
  ): Promise<ChooseDeliveryPackage> {
    const chooseDeliveryPackage = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .where('chooseDeliveryPackage.id = :id', { id })
      .getOne();
    if (!chooseDeliveryPackage) {
      throw new ChooseDeliveryPackageNotFoundException();
    }
    Object.assign(chooseDeliveryPackage, updatedChooseDeliveryPackageDto);
    return await this.chooseDeliveryPackageRepository.save(
      chooseDeliveryPackage,
    );
  }

  async deleted(id: number): Promise<void> {
    const chooseDeliveryPackage = await this.chooseDeliveryPackageRepository
      .createQueryBuilder('chooseDeliveryPackage')
      .where('chooseDeliveryPackage.id = :id', { id })
      .getOne();
    if (!chooseDeliveryPackage) {
      throw new ChooseDeliveryPackageNotFoundException();
    }
    await this.chooseDeliveryPackageRepository.softRemove(
      chooseDeliveryPackage,
    );
    console.log('chooseDeliveryPackage Eliminado');
  }
}
