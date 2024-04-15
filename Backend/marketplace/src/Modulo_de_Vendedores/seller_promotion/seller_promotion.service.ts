import { Injectable } from '@nestjs/common';
import { CreateSellerPromotionDto } from './dto/create-seller_promotion.dto';
import { UpdateSellerPromotionDto } from './dto/update-seller_promotion.dto';

@Injectable()
export class SellerPromotionService {
  create(createSellerPromotionDto: CreateSellerPromotionDto) {
    return 'This action adds a new sellerPromotion';
  }

  findAll() {
    return `This action returns all sellerPromotion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerPromotion`;
  }

  update(id: number, updateSellerPromotionDto: UpdateSellerPromotionDto) {
    return `This action updates a #${id} sellerPromotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerPromotion`;
  }
}
