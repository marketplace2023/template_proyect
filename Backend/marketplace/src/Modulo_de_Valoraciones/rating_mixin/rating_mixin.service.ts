import { Injectable } from '@nestjs/common';
import { CreateRatingMixinDto } from './dto/create-rating_mixin.dto';
import { UpdateRatingMixinDto } from './dto/update-rating_mixin.dto';

@Injectable()
export class RatingMixinService {
  create(createRatingMixinDto: CreateRatingMixinDto) {
    return 'This action adds a new ratingMixin';
  }

  findAll() {
    return `This action returns all ratingMixin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ratingMixin`;
  }

  update(id: number, updateRatingMixinDto: UpdateRatingMixinDto) {
    return `This action updates a #${id} ratingMixin`;
  }

  remove(id: number) {
    return `This action removes a #${id} ratingMixin`;
  }
}
