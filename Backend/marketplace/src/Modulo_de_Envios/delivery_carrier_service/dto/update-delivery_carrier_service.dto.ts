import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryCarrierServiceDto } from './create-delivery_carrier_service.dto';

export class UpdateDeliveryCarrierServiceDto extends PartialType(CreateDeliveryCarrierServiceDto) {}
