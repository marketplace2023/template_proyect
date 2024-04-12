import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryGridDto } from './create-delivery_grid.dto';

export class UpdateDeliveryGridDto extends PartialType(CreateDeliveryGridDto) {}
