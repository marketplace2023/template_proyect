import { PartialType } from '@nestjs/mapped-types';
import { CreateSellerCommissionRuleDto } from './create-seller_commission_rule.dto';

export class UpdateSellerCommissionRuleDto extends PartialType(CreateSellerCommissionRuleDto) {}
