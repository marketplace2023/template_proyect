import { Injectable } from '@nestjs/common';
import { CreateRatingRatingDto } from './dto/create-rating_rating.dto';
import { UpdateRatingRatingDto } from './dto/update-rating_rating.dto';

@Injectable()
export class RatingRatingService {
  create(createRatingRatingDto: CreateRatingRatingDto) {
    return 'This action adds a new ratingRating';
  }

  findAll() {
    return `This action returns all ratingRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ratingRating`;
  }

  update(id: number, updateRatingRatingDto: UpdateRatingRatingDto) {
    return `This action updates a #${id} ratingRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} ratingRating`;
  }
}
