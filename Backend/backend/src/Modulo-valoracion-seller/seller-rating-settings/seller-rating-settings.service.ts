import { Injectable } from '@nestjs/common';
import { SellerRatingSettingsNotFoundException } from './error/seller-rating-settings-not-found.exception';
import { SellerRatingSettings } from './entities/seller-rating-settings.entity';
import { UpdatedSellerRatingSettingsDto } from './dto/updated-seller-rating-settings.dto';
import { CreateSellerRatingSettingsDto } from './dto/create-seller-rating-settings.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SellerRatingSettingsService {
  constructor(
    @InjectRepository(SellerRatingSettings)
    private readonly sellerRatingSettingsRepository: Repository<SellerRatingSettings>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SellerRatingSettings[] | undefined> {
    const offset = (page - 1) * perPage;
    const sellerRatingSettings = await this.sellerRatingSettingsRepository
      .createQueryBuilder('sellerRatingSettings')
      .take(perPage)
      .skip(offset)
      .getMany();
    return sellerRatingSettings;
  }

  async create(
    createSellerRatingSettingsDto: CreateSellerRatingSettingsDto,
  ): Promise<SellerRatingSettings> {
    const sellerRatingSettings = new SellerRatingSettings(
      createSellerRatingSettingsDto,
    );
    return await this.sellerRatingSettingsRepository.save(sellerRatingSettings);
  }

  async findOne(id: number): Promise<SellerRatingSettings> {
    const sellerRatingSettings = await this.sellerRatingSettingsRepository
      .createQueryBuilder('sellerRatingSettings')
      .where('sellerRatingSettings.id = :id', { id })
      .getOne();
    if (!sellerRatingSettings) {
      throw new SellerRatingSettingsNotFoundException();
    }
    return sellerRatingSettings;
  }

  async updated(
    id: number,
    updatedSellerRatingSettingsDto: UpdatedSellerRatingSettingsDto,
  ): Promise<SellerRatingSettings> {
    const sellerRatingSettings = await this.sellerRatingSettingsRepository
      .createQueryBuilder('sellerRatingSettings')
      .where('sellerRatingSettings.id = :id', { id })
      .getOne();
    if (!sellerRatingSettings) {
      throw new SellerRatingSettingsNotFoundException();
    }
    Object.assign(sellerRatingSettings, updatedSellerRatingSettingsDto);
    return await this.sellerRatingSettingsRepository.save(sellerRatingSettings);
  }

  async deleted(id: number): Promise<void> {
    const sellerRatingSettings = await this.sellerRatingSettingsRepository
      .createQueryBuilder('sellerRatingSettings')
      .where('sellerRatingSettings.id = :id', { id })
      .getOne();
    if (!sellerRatingSettings) {
      throw new SellerRatingSettingsNotFoundException();
    }
    await this.sellerRatingSettingsRepository.softRemove(sellerRatingSettings);
    console.log('sellerRatingSettings Eliminado');
  }
}
