import { Injectable } from '@nestjs/common';
import { CreateProductTemplateDto } from './dto/create-product_template.dto';
import { UpdateProductTemplateDto } from './dto/update-product_template.dto';

@Injectable()
export class ProductTemplateService {
  create(createProductTemplateDto: CreateProductTemplateDto) {
    return 'This action adds a new productTemplate';
  }

  findAll() {
    return `This action returns all productTemplate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productTemplate`;
  }

  update(id: number, updateProductTemplateDto: UpdateProductTemplateDto) {
    return `This action updates a #${id} productTemplate`;
  }

  remove(id: number) {
    return `This action removes a #${id} productTemplate`;
  }
}
