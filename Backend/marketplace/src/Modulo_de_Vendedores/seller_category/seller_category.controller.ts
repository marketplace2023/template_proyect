import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SellerCategoryService } from './seller_category.service';
import { CreateSellerCategoryDto } from './dto/create-seller_category.dto';
import { UpdateSellerCategoryDto } from './dto/update-seller_category.dto';

@Controller('seller-category')
export class SellerCategoryController {
  constructor(private readonly sellerCategoryService: SellerCategoryService) {}

  @Post()
  create(@Body() createSellerCategoryDto: CreateSellerCategoryDto) {
    return this.sellerCategoryService.create(createSellerCategoryDto);
  }

  @Get()
  findAll() {
    return this.sellerCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellerCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSellerCategoryDto: UpdateSellerCategoryDto,
  ) {
    return this.sellerCategoryService.update(+id, updateSellerCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellerCategoryService.remove(+id);
  }
}
//configuracion-categorias-productos                                   # (seller.category)
//# Organización y clasificación de productos en categorías.
