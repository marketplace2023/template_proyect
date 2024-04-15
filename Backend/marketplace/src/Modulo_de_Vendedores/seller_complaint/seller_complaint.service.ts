import { Injectable } from '@nestjs/common';
import { CreateSellerComplaintDto } from './dto/create-seller_complaint.dto';
import { UpdateSellerComplaintDto } from './dto/update-seller_complaint.dto';

@Injectable()
export class SellerComplaintService {
  create(createSellerComplaintDto: CreateSellerComplaintDto) {
    return 'This action adds a new sellerComplaint';
  }

  findAll() {
    return `This action returns all sellerComplaint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellerComplaint`;
  }

  update(id: number, updateSellerComplaintDto: UpdateSellerComplaintDto) {
    return `This action updates a #${id} sellerComplaint`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellerComplaint`;
  }
}
