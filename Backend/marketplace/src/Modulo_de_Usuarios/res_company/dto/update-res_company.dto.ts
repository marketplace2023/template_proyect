import { PartialType } from '@nestjs/mapped-types';
import { CreateResCompanyDto } from './create-res_company.dto';

export class UpdateResCompanyDto extends PartialType(CreateResCompanyDto) {}
