import { Injectable } from '@nestjs/common';
import { RatingScale } from './entities/rating-scale.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateRatingScaleDto } from './dto/create-rating-scale.dto';
import { RatingScaleNotFoundException } from './error/rating-scale-not-found.exception';
import { UpdatedRatingScaleDto } from './dto/updated-rating-scale.dto';

@Injectable()
export class RatingScaleService {
  constructor(
    @InjectRepository(RatingScale)
    private readonly ratingScaleRepository: Repository<RatingScale>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingScale[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingScale = await this.ratingScaleRepository
      .createQueryBuilder('ratingScale')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingScale;
  }

  async create(
    createRatingScaleDto: CreateRatingScaleDto,
  ): Promise<RatingScale> {
    const ratingScale = new RatingScale(createRatingScaleDto);
    return await this.ratingScaleRepository.save(ratingScale);
  }

  async findOne(id: number): Promise<RatingScale> {
    const ratingScale = await this.ratingScaleRepository
      .createQueryBuilder('ratingScale')
      .where('ratingScale.id = :id', { id })
      .getOne();
    if (!ratingScale) {
      throw new RatingScaleNotFoundException();
    }
    return ratingScale;
  }

  async updated(
    id: number,
    updatedRatingScaleDto: UpdatedRatingScaleDto,
  ): Promise<RatingScale> {
    const ratingScale = await this.ratingScaleRepository
      .createQueryBuilder('ratingScale')
      .where('ratingScale.id = :id', { id })
      .getOne();
    if (!ratingScale) {
      throw new RatingScaleNotFoundException();
    }
    Object.assign(ratingScale, updatedRatingScaleDto);
    return await this.ratingScaleRepository.save(ratingScale);
  }

  async deleted(id: number): Promise<void> {
    const ratingScale = await this.ratingScaleRepository
      .createQueryBuilder('ratingScale')
      .where('ratingScale.id = :id', { id })
      .getOne();
    if (!ratingScale) {
      throw new RatingScaleNotFoundException();
    }
    await this.ratingScaleRepository.softRemove(ratingScale);
    console.log('ratingScale Eliminado');
  }
}
