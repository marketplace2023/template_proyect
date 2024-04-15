import { Injectable } from '@nestjs/common';
import { CreateSaleOrderOptionDto } from './dto/create-sale_order_option.dto';
import { UpdateSaleOrderOptionDto } from './dto/update-sale_order_option.dto';

@Injectable()
export class SaleOrderOptionService {
  create(createSaleOrderOptionDto: CreateSaleOrderOptionDto) {
    return 'This action adds a new saleOrderOption';
  }

  findAll() {
    return `This action returns all saleOrderOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderOption`;
  }

  update(id: number, updateSaleOrderOptionDto: UpdateSaleOrderOptionDto) {
    return `This action updates a #${id} saleOrderOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderOption`;
  }
}
