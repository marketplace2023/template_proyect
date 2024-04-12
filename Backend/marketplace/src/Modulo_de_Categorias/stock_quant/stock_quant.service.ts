import { Injectable } from '@nestjs/common';
import { CreateStockQuantDto } from './dto/create-stock_quant.dto';
import { UpdateStockQuantDto } from './dto/update-stock_quant.dto';

@Injectable()
export class StockQuantService {
  create(createStockQuantDto: CreateStockQuantDto) {
    return 'This action adds a new stockQuant';
  }

  findAll() {
    return `This action returns all stockQuant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockQuant`;
  }

  update(id: number, updateStockQuantDto: UpdateStockQuantDto) {
    return `This action updates a #${id} stockQuant`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockQuant`;
  }
}
