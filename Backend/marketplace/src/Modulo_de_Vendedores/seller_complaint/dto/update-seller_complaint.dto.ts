import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerComplaintDto } from './create-seller_complaint.dto';

export class UpdateSellerComplaintDto extends PartialType(CreateSellerComplaintDto) {}
