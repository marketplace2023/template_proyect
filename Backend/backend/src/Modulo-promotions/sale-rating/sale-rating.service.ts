import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SaleRatingNotFoundException } from './error/sale-rating-not-found.exception';
import { UpdatedSaleRatingDto } from './dto/updated-sale-rating.dto';
import { SaleRating } from './entities/sale-rating.entity';
import { CreateSaleRatingDto } from './dto/created-sale-rating.dto';
import { Repository } from 'typeorm';

@Injectable()
export class SaleRatingService {
  constructor(
    @InjectRepository(SaleRating)
    private readonly saleRatingRepository: Repository<SaleRating>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SaleRating[] | undefined> {
    const offset = (page - 1) * perPage;
    const saleRating = await this.saleRatingRepository
      .createQueryBuilder('saleRating')
      .take(perPage)
      .skip(offset)
      .getMany();
    return saleRating;
  }

  async create(createSaleRatingDto: CreateSaleRatingDto): Promise<SaleRating> {
    const saleRating = new SaleRating(createSaleRatingDto);
    return await this.saleRatingRepository.save(saleRating);
  }

  async findOne(id: number): Promise<SaleRating> {
    const saleRating = await this.saleRatingRepository
      .createQueryBuilder('saleRating')
      .where('saleRating.id = :id', { id })
      .getOne();
    if (!saleRating) {
      throw new SaleRatingNotFoundException();
    }
    return saleRating;
  }

  async updated(
    id: number,
    updatedSaleRatingDto: UpdatedSaleRatingDto,
  ): Promise<SaleRating> {
    const saleRating = await this.saleRatingRepository
      .createQueryBuilder('saleRating')
      .where('saleRating.id = :id', { id })
      .getOne();
    if (!saleRating) {
      throw new SaleRatingNotFoundException();
    }
    Object.assign(saleRating, updatedSaleRatingDto);
    return await this.saleRatingRepository.save(saleRating);
  }

  async deleted(id: number): Promise<void> {
    const saleRating = await this.saleRatingRepository
      .createQueryBuilder('saleRating')
      .where('saleRating.id = :id', { id })
      .getOne();
    if (!saleRating) {
      throw new SaleRatingNotFoundException();
    }
    await this.saleRatingRepository.softRemove(saleRating);
    console.log('saleRating Eliminado');
  }
}
