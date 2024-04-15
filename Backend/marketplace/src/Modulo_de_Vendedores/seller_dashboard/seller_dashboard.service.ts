import { Injectable } from '@nestjs/common';
import { CreateSellerDashboardDto } from './dto/create-seller_dashboard.dto';
import { UpdateSellerDashboardDto } from './dto/update-seller_dashboard.dto';

@Injectable()
export class SellerDashboardService {
  create(createSellerDashboardDto: CreateSellerDashboardDto) {
    return 'This action adds a new sellerDashboard';
  }

  findAll() {
    return `This action returns all sellerDashboard`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerDashboard`;
  }

  update(id: number, updateSellerDashboardDto: UpdateSellerDashboardDto) {
    return `This action updates a #${id} sellerDashboard`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerDashboard`;
  }
}
