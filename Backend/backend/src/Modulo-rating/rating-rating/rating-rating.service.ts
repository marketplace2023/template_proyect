import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRatingRatingDto } from './dto/create-rating-rating.dto';
import { RatingRating } from './entities/rating-rating.entity';
import { RatingRatingNotFoundException } from './error/rating-rating-not-found.exception';
import { UpdatedRatingRatingDto } from './dto/updated-rating-rating.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RatingRatingService {
  constructor(
    @InjectRepository(RatingRating)
    private readonly ratingRatingRepository: Repository<RatingRating>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingRating[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingRating = await this.ratingRatingRepository
      .createQueryBuilder('ratingRating')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingRating;
  }

  async create(
    createRatingRatingDto: CreateRatingRatingDto,
  ): Promise<RatingRating> {
    const ratingRating = new RatingRating(createRatingRatingDto);
    return await this.ratingRatingRepository.save(ratingRating);
  }

  async findOne(id: number): Promise<RatingRating> {
    const ratingRating = await this.ratingRatingRepository
      .createQueryBuilder('ratingRating')
      .where('ratingRating.id = :id', { id })
      .getOne();
    if (!ratingRating) {
      throw new RatingRatingNotFoundException();
    }
    return ratingRating;
  }

  async updated(
    id: number,
    updatedRatingRatingDto: UpdatedRatingRatingDto,
  ): Promise<RatingRating> {
    const ratingRating = await this.ratingRatingRepository
      .createQueryBuilder('ratingRating')
      .where('ratingRating.id = :id', { id })
      .getOne();
    if (!ratingRating) {
      throw new RatingRatingNotFoundException();
    }
    Object.assign(ratingRating, updatedRatingRatingDto);
    return await this.ratingRatingRepository.save(ratingRating);
  }

  async deleted(id: number): Promise<void> {
    const ratingRating = await this.ratingRatingRepository
      .createQueryBuilder('ratingRating')
      .where('ratingRating.id = :id', { id })
      .getOne();
    if (!ratingRating) {
      throw new RatingRatingNotFoundException();
    }
    await this.ratingRatingRepository.softRemove(ratingRating);
    console.log('ratingRating Eliminado');
  }
}
