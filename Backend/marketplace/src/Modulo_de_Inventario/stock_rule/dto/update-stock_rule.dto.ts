import { PartialType } from '@nestjs/mapped-types';
import { CreateStockRuleDto } from './create-stock_rule.dto';

export class UpdateStockRuleDto extends PartialType(CreateStockRuleDto) {}
