import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SellerRating } from './entities/seller-ratings.entity';
import { Repository } from 'typeorm';
import { CreateSellerRatingDto } from './dto/create-seller-rating.dto';
import { SellerRatingLineNotFoundException } from '../seller-rating-line/error/seller-rating-line-not-found.exception';
import { UpdatedSellerRatingDto } from './dto/updated_seller-ratings.dto';
import { SellerRatingNotFoundException } from './error/seller-ratings-not-found.exception';

@Injectable()
export class SellerRatingsService {
  constructor(
    @InjectRepository(SellerRating)
    private readonly sellerRatingRepository: Repository<SellerRating>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<SellerRating[] | undefined> {
    const offset = (page - 1) * perPage;
    const sellerRating = await this.sellerRatingRepository
      .createQueryBuilder('sellerRating')
      .take(perPage)
      .skip(offset)
      .getMany();
    return sellerRating;
  }

  async create(
    createSellerRatingDto: CreateSellerRatingDto,
  ): Promise<SellerRating> {
    const sellerRating = new SellerRating(createSellerRatingDto);
    return await this.sellerRatingRepository.save(sellerRating);
  }

  async findOne(id: number): Promise<SellerRating> {
    const sellerRating = await this.sellerRatingRepository
      .createQueryBuilder('sellerRating')
      .where('sellerRating.id = :id', { id })
      .getOne();
    if (!sellerRating) {
      throw new SellerRatingLineNotFoundException();
    }
    return sellerRating;
  }

  async updated(
    id: number,
    updatedSellerRatingDto: UpdatedSellerRatingDto,
  ): Promise<SellerRating> {
    const sellerRating = await this.sellerRatingRepository
      .createQueryBuilder('sellerRating')
      .where('sellerRating.id = :id', { id })
      .getOne();
    if (!sellerRating) {
      throw new SellerRatingLineNotFoundException();
    }
    Object.assign(sellerRating, updatedSellerRatingDto);
    return await this.sellerRatingRepository.save(sellerRating);
  }

  async deleted(id: number): Promise<void> {
    const sellerRating = await this.sellerRatingRepository
      .createQueryBuilder('sellerRating')
      .where('sellerRating.id = :id', { id })
      .getOne();
    if (!sellerRating) {
      throw new SellerRatingNotFoundException();
    }
    await this.sellerRatingRepository.softRemove(sellerRating);
    console.log('sellerRating Eliminado');
  }
}
