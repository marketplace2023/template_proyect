import { Injectable } from '@nestjs/common';
import { CreateStockPickingBatchDto } from './dto/create-stock_picking_batch.dto';
import { UpdateStockPickingBatchDto } from './dto/update-stock_picking_batch.dto';

@Injectable()
export class StockPickingBatchService {
  create(createStockPickingBatchDto: CreateStockPickingBatchDto) {
    return 'This action adds a new stockPickingBatch';
  }

  findAll() {
    return `This action returns all stockPickingBatch`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockPickingBatch`;
  }

  update(id: number, updateStockPickingBatchDto: UpdateStockPickingBatchDto) {
    return `This action updates a #${id} stockPickingBatch`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockPickingBatch`;
  }
}
