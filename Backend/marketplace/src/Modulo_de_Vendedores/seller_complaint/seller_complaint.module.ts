import { Module } from '@nestjs/common';
import { SellerComplaintService } from './seller_complaint.service';
import { SellerComplaintController } from './seller_complaint.controller';

@Module({
  controllers: [SellerComplaintController],
  providers: [SellerComplaintService],
})
export class SellerComplaintModule {}
