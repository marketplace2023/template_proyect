import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderTemplateDto } from './create-sale_order_template.dto';

export class UpdateSaleOrderTemplateDto extends PartialType(CreateSaleOrderTemplateDto) {}
