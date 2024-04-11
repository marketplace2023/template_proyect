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
import { ProductSupplierTaxesRelService } from './product-supplier-taxes-rel.service';
import { ProductSupplierTaxesRel } from './entities/product-supplier-taxes-rel.entity';
import { CreateProductSupplierTaxesRelDto } from './dto/created-product-supplier-taxes-rel.dto';
import { UpdatedProductSupplierTaxesRelDto } from './dto/updated-product-supplier-taxes-rel.dto';

@Controller('product-supplier-taxes-rel')
export class ProductSupplierTaxesRelController {
  constructor(
    private readonly productSupplierTaxesRelService: ProductSupplierTaxesRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductSupplierTaxesRel[]> {
    console.log('hola');
    return await this.productSupplierTaxesRelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductSupplierTaxesRelDto: CreateProductSupplierTaxesRelDto,
  ): Promise<ProductSupplierTaxesRel> {
    return await this.productSupplierTaxesRelService.create(
      createaProductSupplierTaxesRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductSupplierTaxesRel> {
    return await this.productSupplierTaxesRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedProductSupplierTaxesRelDto: UpdatedProductSupplierTaxesRelDto,
    @Param('id') id: string,
  ): Promise<ProductSupplierTaxesRel> {
    return await this.productSupplierTaxesRelService.updated(
      +id,
      updatedProductSupplierTaxesRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productSupplierTaxesRelService.deleted(+id);
  }
}
