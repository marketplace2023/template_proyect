import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerAnalyticDto } from './create-seller_analytic.dto';

export class UpdateSellerAnalyticDto extends PartialType(CreateSellerAnalyticDto) {}
