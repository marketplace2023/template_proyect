import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingTag } from './entities/rating-tag.entity';
import { Repository } from 'typeorm';
import { CreateRatingTagDto } from './dto/created-rating-tag.dto';
import { RatingTagNotFoundException } from './error/rating-tag-not-found.exception';
import { UpdatedRatingTagDto } from './dto/updated-rating-tag.dto';

@Injectable()
export class RatingTagService {
  constructor(
    @InjectRepository(RatingTag)
    private readonly ratingTagRepository: Repository<RatingTag>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingTag[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingTag = await this.ratingTagRepository
      .createQueryBuilder('ratingTag')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingTag;
  }

  async create(createRatingTagDto: CreateRatingTagDto): Promise<RatingTag> {
    const ratingTag = new RatingTag(createRatingTagDto);
    return await this.ratingTagRepository.save(ratingTag);
  }

  async findOne(id: number): Promise<RatingTag> {
    const ratingTag = await this.ratingTagRepository
      .createQueryBuilder('ratingTag')
      .where('ratingTag.id = :id', { id })
      .getOne();
    if (!ratingTag) {
      throw new RatingTagNotFoundException();
    }
    return ratingTag;
  }

  async updated(
    id: number,
    updatedRatingTagDto: UpdatedRatingTagDto,
  ): Promise<RatingTag> {
    const ratingTag = await this.ratingTagRepository
      .createQueryBuilder('ratingTag')
      .where('ratingTag.id = :id', { id })
      .getOne();
    if (!ratingTag) {
      throw new RatingTagNotFoundException();
    }
    Object.assign(ratingTag, updatedRatingTagDto);
    return await this.ratingTagRepository.save(ratingTag);
  }

  async deleted(id: number): Promise<void> {
    const ratingTag = await this.ratingTagRepository
      .createQueryBuilder('ratingTag')
      .where('ratingTag.id = :id', { id })
      .getOne();
    if (!ratingTag) {
      throw new RatingTagNotFoundException();
    }
    await this.ratingTagRepository.softRemove(ratingTag);
    console.log('ratingTag Eliminado');
  }
}
