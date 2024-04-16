import { Injectable } from '@nestjs/common';
import { CreateStockRuleDto } from './dto/create-stock_rule.dto';
import { UpdateStockRuleDto } from './dto/update-stock_rule.dto';

@Injectable()
export class StockRuleService {
  create(createStockRuleDto: CreateStockRuleDto) {
    return 'This action adds a new stockRule';
  }

  findAll() {
    return `This action returns all stockRule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockRule`;
  }

  update(id: number, updateStockRuleDto: UpdateStockRuleDto) {
    return `This action updates a #${id} stockRule`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockRule`;
  }
}
