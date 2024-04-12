import { Injectable } from '@nestjs/common';
import { CreateStockMoveDto } from './dto/create-stock_move.dto';
import { UpdateStockMoveDto } from './dto/update-stock_move.dto';

@Injectable()
export class StockMoveService {
  create(createStockMoveDto: CreateStockMoveDto) {
    return 'This action adds a new stockMove';
  }

  findAll() {
    return `This action returns all stockMove`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockMove`;
  }

  update(id: number, updateStockMoveDto: UpdateStockMoveDto) {
    return `This action updates a #${id} stockMove`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockMove`;
  }
}
