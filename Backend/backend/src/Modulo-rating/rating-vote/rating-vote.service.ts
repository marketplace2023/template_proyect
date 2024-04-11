import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RatingVote } from './entities/rating-vote.entity';
import { Repository } from 'typeorm';
import { CreateRatingVoteDto } from './dto/create-rating-vote.dto';
import { RatingVoteNotFoundException } from './error/rating-vote-not-found.exception';
import { UpdatedRatingVoteDto } from './dto/updated-rating-vote.dto';

@Injectable()
export class RatingVoteService {
  constructor(
    @InjectRepository(RatingVote)
    private readonly ratingVoteRepository: Repository<RatingVote>,
  ) {}
  async paginate(
    page: number,
    perPage: number,
  ): Promise<RatingVote[] | undefined> {
    const offset = (page - 1) * perPage;
    const ratingVote = await this.ratingVoteRepository
      .createQueryBuilder('ratingVote')
      .take(perPage)
      .skip(offset)
      .getMany();
    return ratingVote;
  }

  async create(createRatingVoteDto: CreateRatingVoteDto): Promise<RatingVote> {
    const ratingVote = new RatingVote(createRatingVoteDto);
    return await this.ratingVoteRepository.save(ratingVote);
  }

  async findOne(id: number): Promise<RatingVote> {
    const ratingVote = await this.ratingVoteRepository
      .createQueryBuilder('ratingVote')
      .where('ratingVote.id = :id', { id })
      .getOne();
    if (!ratingVote) {
      throw new RatingVoteNotFoundException();
    }
    return ratingVote;
  }

  async updated(
    id: number,
    updatedRatingVoteDto: UpdatedRatingVoteDto,
  ): Promise<RatingVote> {
    const ratingVote = await this.ratingVoteRepository
      .createQueryBuilder('ratingVote')
      .where('ratingVote.id = :id', { id })
      .getOne();
    if (!ratingVote) {
      throw new RatingVoteNotFoundException();
    }
    Object.assign(ratingVote, updatedRatingVoteDto);
    return await this.ratingVoteRepository.save(ratingVote);
  }

  async deleted(id: number): Promise<void> {
    const ratingVote = await this.ratingVoteRepository
      .createQueryBuilder('ratingVote')
      .where('ratingVote.id = :id', { id })
      .getOne();
    if (!ratingVote) {
      throw new RatingVoteNotFoundException();
    }
    await this.ratingVoteRepository.softRemove(ratingVote);
    console.log('ratingVote Eliminado');
  }
}
