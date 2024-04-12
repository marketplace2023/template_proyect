import { Injectable } from '@nestjs/common';
import { CreateStockPickingDto } from './dto/create-stock_picking.dto';
import { UpdateStockPickingDto } from './dto/update-stock_picking.dto';

@Injectable()
export class StockPickingService {
  create(createStockPickingDto: CreateStockPickingDto) {
    return 'This action adds a new stockPicking';
  }

  findAll() {
    return `This action returns all stockPicking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockPicking`;
  }

  update(id: number, updateStockPickingDto: UpdateStockPickingDto) {
    return `This action updates a #${id} stockPicking`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockPicking`;
  }
}
