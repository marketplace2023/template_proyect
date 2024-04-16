import { Injectable } from '@nestjs/common';
import { CreateStockWarehouseOrderpointDto } from './dto/create-stock_warehouse_orderpoint.dto';
import { UpdateStockWarehouseOrderpointDto } from './dto/update-stock_warehouse_orderpoint.dto';

@Injectable()
export class StockWarehouseOrderpointService {
  create(createStockWarehouseOrderpointDto: CreateStockWarehouseOrderpointDto) {
    return 'This action adds a new stockWarehouseOrderpoint';
  }

  findAll() {
    return `This action returns all stockWarehouseOrderpoint`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockWarehouseOrderpoint`;
  }

  update(id: number, updateStockWarehouseOrderpointDto: UpdateStockWarehouseOrderpointDto) {
    return `This action updates a #${id} stockWarehouseOrderpoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockWarehouseOrderpoint`;
  }
}
