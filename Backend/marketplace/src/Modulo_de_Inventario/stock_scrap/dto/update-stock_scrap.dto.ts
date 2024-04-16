import { PartialType } from '@nestjs/mapped-types';
import { CreateStockScrapDto } from './create-stock_scrap.dto';

export class UpdateStockScrapDto extends PartialType(CreateStockScrapDto) {}
