import { Injectable } from '@nestjs/common';
import { CreateSellerAnalyticDto } from './dto/create-seller_analytic.dto';
import { UpdateSellerAnalyticDto } from './dto/update-seller_analytic.dto';

@Injectable()
export class SellerAnalyticsService {
  create(createSellerAnalyticDto: CreateSellerAnalyticDto) {
    return 'This action adds a new sellerAnalytic';
  }

  findAll() {
    return `This action returns all sellerAnalytics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerAnalytic`;
  }

  update(id: number, updateSellerAnalyticDto: UpdateSellerAnalyticDto) {
    return `This action updates a #${id} sellerAnalytic`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerAnalytic`;
  }
}
