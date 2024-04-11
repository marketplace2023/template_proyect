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
import { ProductSupplierinfoService } from './product-supplierinfo.service';
import { ProductSupplierinfo } from './entities/product-supplierinfo.entity';
import { CreateProductSupplierinfoDto } from './dto/created-product-supplierinfo.dto';
import { UpdatedProductSupplierinfoDto } from './dto/updated-product-supplierinfo.dto';

@Controller('product-supplierinfo')
export class ProductSupplierinfoController {
  constructor(
    private readonly productSupplierinfoService: ProductSupplierinfoService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductSupplierinfo[]> {
    console.log('hola');
    return await this.productSupplierinfoService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductSupplierinfoDto: CreateProductSupplierinfoDto,
  ): Promise<ProductSupplierinfo> {
    return await this.productSupplierinfoService.create(
      createaProductSupplierinfoDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductSupplierinfo> {
    return await this.productSupplierinfoService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductSupplierinfoDto: UpdatedProductSupplierinfoDto,
    @Param('id') id: string,
  ): Promise<ProductSupplierinfo> {
    return await this.productSupplierinfoService.updated(
      +id,
      updatedProductSupplierinfoDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productSupplierinfoService.deleted(+id);
  }
}
