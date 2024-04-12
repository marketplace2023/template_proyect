import { Injectable } from '@nestjs/common';
import { CreateStockPackOperationDto } from './dto/create-stock_pack_operation.dto';
import { UpdateStockPackOperationDto } from './dto/update-stock_pack_operation.dto';

@Injectable()
export class StockPackOperationService {
  create(createStockPackOperationDto: CreateStockPackOperationDto) {
    return 'This action adds a new stockPackOperation';
  }

  findAll() {
    return `This action returns all stockPackOperation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockPackOperation`;
  }

  update(id: number, updateStockPackOperationDto: UpdateStockPackOperationDto) {
    return `This action updates a #${id} stockPackOperation`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockPackOperation`;
  }
}
