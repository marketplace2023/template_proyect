import { Injectable } from '@nestjs/common';
import { CreateSaleOrderTemplateOptionDto } from './dto/create-sale_order_template_option.dto';
import { UpdateSaleOrderTemplateOptionDto } from './dto/update-sale_order_template_option.dto';

@Injectable()
export class SaleOrderTemplateOptionService {
  create(createSaleOrderTemplateOptionDto: CreateSaleOrderTemplateOptionDto) {
    return 'This action adds a new saleOrderTemplateOption';
  }

  findAll() {
    return `This action returns all saleOrderTemplateOption`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderTemplateOption`;
  }

  update(id: number, updateSaleOrderTemplateOptionDto: UpdateSaleOrderTemplateOptionDto) {
    return `This action updates a #${id} saleOrderTemplateOption`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderTemplateOption`;
  }
}
