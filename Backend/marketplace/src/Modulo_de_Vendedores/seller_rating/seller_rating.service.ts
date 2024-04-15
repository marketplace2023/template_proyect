import { Injectable } from '@nestjs/common';
import { CreateSellerRatingDto } from './dto/create-seller_rating.dto';
import { UpdateSellerRatingDto } from './dto/update-seller_rating.dto';

@Injectable()
export class SellerRatingService {
  create(createSellerRatingDto: CreateSellerRatingDto) {
    return 'This action adds a new sellerRating';
  }

  findAll() {
    return `This action returns all sellerRating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerRating`;
  }

  update(id: number, updateSellerRatingDto: UpdateSellerRatingDto) {
    return `This action updates a #${id} sellerRating`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerRating`;
  }
}
