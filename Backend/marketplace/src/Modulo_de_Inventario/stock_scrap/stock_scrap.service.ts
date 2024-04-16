import { Injectable } from '@nestjs/common';
import { CreateStockScrapDto } from './dto/create-stock_scrap.dto';
import { UpdateStockScrapDto } from './dto/update-stock_scrap.dto';

@Injectable()
export class StockScrapService {
  create(createStockScrapDto: CreateStockScrapDto) {
    return 'This action adds a new stockScrap';
  }

  findAll() {
    return `This action returns all stockScrap`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockScrap`;
  }

  update(id: number, updateStockScrapDto: UpdateStockScrapDto) {
    return `This action updates a #${id} stockScrap`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockScrap`;
  }
}
