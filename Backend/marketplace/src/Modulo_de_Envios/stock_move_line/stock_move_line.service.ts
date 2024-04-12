import { Injectable } from '@nestjs/common';
import { CreateStockMoveLineDto } from './dto/create-stock_move_line.dto';
import { UpdateStockMoveLineDto } from './dto/update-stock_move_line.dto';

@Injectable()
export class StockMoveLineService {
  create(createStockMoveLineDto: CreateStockMoveLineDto) {
    return 'This action adds a new stockMoveLine';
  }

  findAll() {
    return `This action returns all stockMoveLine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockMoveLine`;
  }

  update(id: number, updateStockMoveLineDto: UpdateStockMoveLineDto) {
    return `This action updates a #${id} stockMoveLine`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockMoveLine`;
  }
}
