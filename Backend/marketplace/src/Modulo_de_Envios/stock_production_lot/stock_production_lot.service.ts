import { Injectable } from '@nestjs/common';
import { CreateStockProductionLotDto } from './dto/create-stock_production_lot.dto';
import { UpdateStockProductionLotDto } from './dto/update-stock_production_lot.dto';

@Injectable()
export class StockProductionLotService {
  create(createStockProductionLotDto: CreateStockProductionLotDto) {
    return 'This action adds a new stockProductionLot';
  }

  findAll() {
    return `This action returns all stockProductionLot`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockProductionLot`;
  }

  update(id: number, updateStockProductionLotDto: UpdateStockProductionLotDto) {
    return `This action updates a #${id} stockProductionLot`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockProductionLot`;
  }
}
