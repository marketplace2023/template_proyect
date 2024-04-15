import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerDashboardDto } from './create-seller_dashboard.dto';

export class UpdateSellerDashboardDto extends PartialType(CreateSellerDashboardDto) {}
