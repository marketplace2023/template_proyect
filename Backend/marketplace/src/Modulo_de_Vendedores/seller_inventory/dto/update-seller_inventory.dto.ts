import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerInventoryDto } from './create-seller_inventory.dto';

export class UpdateSellerInventoryDto extends PartialType(CreateSellerInventoryDto) {}
