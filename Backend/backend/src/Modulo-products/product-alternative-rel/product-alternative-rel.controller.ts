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
import { ProductAlternativeRelService } from './product-alternative-rel.service';
import { ProductAlternativeRel } from './entities/product-alternative-rel.entity';
import { CreateProductAlternativeRelDto } from './dto/created-product-alternative-rel.dto';
import { UpdatedProductAlternativeRelDto } from './dto/updated-product-alternative-rel.dto';
@Controller('product-alternative-rel')
export class ProductAlternativeRelController {
  constructor(
    private readonly productAlternativeRelService: ProductAlternativeRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductAlternativeRel[]> {
    return await this.productAlternativeRelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductAlternativeRelDto: CreateProductAlternativeRelDto,
  ): Promise<ProductAlternativeRel> {
    return await this.productAlternativeRelService.create(
      createaProductAlternativeRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductAlternativeRel> {
    return await this.productAlternativeRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductAlternativeRelDto: UpdatedProductAlternativeRelDto,
    @Param('id') id: string,
  ): Promise<ProductAlternativeRel> {
    return await this.productAlternativeRelService.updated(
      +id,
      updatedProductAlternativeRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productAlternativeRelService.deleted(+id);
  }
}
