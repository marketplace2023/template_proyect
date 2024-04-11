import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProductTaxesRel } from './entities/product-taxes-rel.entity';
import { CreateProductTaxesRelDto } from './dto/created-product-taxes-rel.dto';
import { ProductTaxesRelService } from './product-taxes-rel.service';
import { UpdatedProductTaxesRelDto } from './dto/updated-product-taxes-rel.dto';

@Controller('product-taxes-rel')
export class ProductTaxesRelController {
  constructor(
    private readonly productTaxesRelService: ProductTaxesRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductTaxesRel[]> {
    console.log('hola');
    return await this.productTaxesRelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductTaxesRelDto: CreateProductTaxesRelDto,
  ): Promise<ProductTaxesRel> {
    return await this.productTaxesRelService.create(createaProductTaxesRelDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductTaxesRel> {
    return await this.productTaxesRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductTaxesRelDto: UpdatedProductTaxesRelDto,
    @Param('id') id: string,
  ): Promise<ProductTaxesRel> {
    return await this.productTaxesRelService.updated(
      +id,
      updatedProductTaxesRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productTaxesRelService.deleted(+id);
  }
}
