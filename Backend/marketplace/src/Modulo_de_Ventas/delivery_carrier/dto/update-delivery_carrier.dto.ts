import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryCarrierDto } from './create-delivery_carrier.dto';

export class UpdateDeliveryCarrierDto extends PartialType(CreateDeliveryCarrierDto) {}
