import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingImageNotFoundException } from './error/rating-image-not-found.exception';
import { RatingImage } from './entities/rating-image.entity';
import { UpdatedRatingImageDto } from './dto/updated-rating-image.dto';
import { CreateRatingImageDto } from './dto/created-rating-image.dto';
import { Repository } from 'typeorm';

@Injectable()
export class RatingImageService {
  constructor(
    @InjectRepository(RatingImage)
    private readonly ratingImageRepository: Repository<RatingImage>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingImage[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingImage = await this.ratingImageRepository
      .createQueryBuilder('ratingImage')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingImage;
  }

  async create(
    createRatingImageDto: CreateRatingImageDto,
  ): Promise<RatingImage> {
    const ratingImage = new RatingImage(createRatingImageDto);
    return await this.ratingImageRepository.save(ratingImage);
  }

  async findOne(id: number): Promise<RatingImage> {
    const ratingImage = await this.ratingImageRepository
      .createQueryBuilder('ratingImage')
      .where('ratingImage.id = :id', { id })
      .getOne();
    if (!ratingImage) {
      throw new RatingImageNotFoundException();
    }
    return ratingImage;
  }

  async updated(
    id: number,
    updatedRatingImageDto: UpdatedRatingImageDto,
  ): Promise<RatingImage> {
    const ratingImage = await this.ratingImageRepository
      .createQueryBuilder('ratingImage')
      .where('ratingImage.id = :id', { id })
      .getOne();
    if (!ratingImage) {
      throw new RatingImageNotFoundException();
    }
    Object.assign(ratingImage, updatedRatingImageDto);
    return await this.ratingImageRepository.save(ratingImage);
  }

  async deleted(id: number): Promise<void> {
    const ratingImage = await this.ratingImageRepository
      .createQueryBuilder('ratingImage')
      .where('ratingImage.id = :id', { id })
      .getOne();
    if (!ratingImage) {
      throw new RatingImageNotFoundException();
    }
    await this.ratingImageRepository.softRemove(ratingImage);
    console.log('ratingImage Eliminado');
  }
}
