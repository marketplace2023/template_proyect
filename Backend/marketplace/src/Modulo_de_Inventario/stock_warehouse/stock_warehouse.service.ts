import { Injectable } from '@nestjs/common';
import { CreateStockWarehouseDto } from './dto/create-stock_warehouse.dto';
import { UpdateStockWarehouseDto } from './dto/update-stock_warehouse.dto';

@Injectable()
export class StockWarehouseService {
  create(createStockWarehouseDto: CreateStockWarehouseDto) {
    return 'This action adds a new stockWarehouse';
  }

  findAll() {
    return `This action returns all stockWarehouse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockWarehouse`;
  }

  update(id: number, updateStockWarehouseDto: UpdateStockWarehouseDto) {
    return `This action updates a #${id} stockWarehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockWarehouse`;
  }
}
