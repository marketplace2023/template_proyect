import { Injectable } from '@nestjs/common';
import { CreateSaleOrderTemplateDto } from './dto/create-sale_order_template.dto';
import { UpdateSaleOrderTemplateDto } from './dto/update-sale_order_template.dto';

@Injectable()
export class SaleOrderTemplateService {
  create(createSaleOrderTemplateDto: CreateSaleOrderTemplateDto) {
    return 'This action adds a new saleOrderTemplate';
  }

  findAll() {
    return `This action returns all saleOrderTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleOrderTemplate`;
  }

  update(id: number, updateSaleOrderTemplateDto: UpdateSaleOrderTemplateDto) {
    return `This action updates a #${id} saleOrderTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleOrderTemplate`;
  }
}
