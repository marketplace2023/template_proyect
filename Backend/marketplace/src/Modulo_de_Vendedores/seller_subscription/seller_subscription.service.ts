import { Injectable } from '@nestjs/common';
import { CreateSellerSubscriptionDto } from './dto/create-seller_subscription.dto';
import { UpdateSellerSubscriptionDto } from './dto/update-seller_subscription.dto';

@Injectable()
export class SellerSubscriptionService {
  create(createSellerSubscriptionDto: CreateSellerSubscriptionDto) {
    return 'This action adds a new sellerSubscription';
  }

  findAll() {
    return `This action returns all sellerSubscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerSubscription`;
  }

  update(id: number, updateSellerSubscriptionDto: UpdateSellerSubscriptionDto) {
    return `This action updates a #${id} sellerSubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerSubscription`;
  }
}
