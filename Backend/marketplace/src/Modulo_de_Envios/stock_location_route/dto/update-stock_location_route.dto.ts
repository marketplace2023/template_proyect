import { PartialType } from '@nestjs/mapped-types';
import { CreateStockLocationRouteDto } from './create-stock_location_route.dto';

export class UpdateStockLocationRouteDto extends PartialType(CreateStockLocationRouteDto) {}
