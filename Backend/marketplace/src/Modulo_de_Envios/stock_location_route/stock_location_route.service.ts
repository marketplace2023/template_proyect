import { Injectable } from '@nestjs/common';
import { CreateStockLocationRouteDto } from './dto/create-stock_location_route.dto';
import { UpdateStockLocationRouteDto } from './dto/update-stock_location_route.dto';

@Injectable()
export class StockLocationRouteService {
  create(createStockLocationRouteDto: CreateStockLocationRouteDto) {
    return 'This action adds a new stockLocationRoute';
  }

  findAll() {
    return `This action returns all stockLocationRoute`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockLocationRoute`;
  }

  update(id: number, updateStockLocationRouteDto: UpdateStockLocationRouteDto) {
    return `This action updates a #${id} stockLocationRoute`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockLocationRoute`;
  }
}
