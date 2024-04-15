import { PartialType } from '@nestjs/mapped-types';
import { CreateSaleOrderTemplateOptionDto } from './create-sale_order_template_option.dto';

export class UpdateSaleOrderTemplateOptionDto extends PartialType(CreateSaleOrderTemplateOptionDto) {}
