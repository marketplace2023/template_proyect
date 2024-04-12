import { PartialType } from '@nestjs/mapped-types';
import { CreateResPartnerDto } from './create-res_partner.dto';

export class UpdateResPartnerDto extends PartialType(CreateResPartnerDto) {}
