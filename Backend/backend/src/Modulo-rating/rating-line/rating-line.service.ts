import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingLine } from './entities/rating-line.entity';
import { Repository } from 'typeorm';
import { RatingLineNotFoundException } from './error/rating-line-not-found.exception';
import { UpdatedRatingLineDto } from './dto/updated-rating-line.dto';
import { CreateRatingLineDto } from './dto/create-rating-line.dto';

@Injectable()
export class RatingLineService {
  constructor(
    @InjectRepository(RatingLine)
    private readonly ratingLineRepository: Repository<RatingLine>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingLine[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingLine = await this.ratingLineRepository
      .createQueryBuilder('ratingLine')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingLine;
  }

  async create(createRatingLineDto: CreateRatingLineDto): Promise<RatingLine> {
    const ratingLine = new RatingLine(createRatingLineDto);
    return await this.ratingLineRepository.save(ratingLine);
  }

  async findOne(id: number): Promise<RatingLine> {
    const ratingLine = await this.ratingLineRepository
      .createQueryBuilder('ratingLine')
      .where('ratingLine.id = :id', { id })
      .getOne();
    if (!ratingLine) {
      throw new RatingLineNotFoundException();
    }
    return ratingLine;
  }

  async updated(
    id: number,
    updatedRatingLineDto: UpdatedRatingLineDto,
  ): Promise<RatingLine> {
    const ratingLine = await this.ratingLineRepository
      .createQueryBuilder('ratingLine')
      .where('ratingLine.id = :id', { id })
      .getOne();
    if (!ratingLine) {
      throw new RatingLineNotFoundException();
    }
    Object.assign(ratingLine, updatedRatingLineDto);
    return await this.ratingLineRepository.save(ratingLine);
  }

  async deleted(id: number): Promise<void> {
    const ratingLine = await this.ratingLineRepository
      .createQueryBuilder('ratingLine')
      .where('ratingLine.id = :id', { id })
      .getOne();
    if (!ratingLine) {
      throw new RatingLineNotFoundException();
    }
    await this.ratingLineRepository.softRemove(ratingLine);
    console.log('ratingLine Eliminado');
  }
}
