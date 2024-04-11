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
import { ProductProductTemplateService } from './product-product-template.service';
import { ProductProductTemplate } from './entities/product-product-template.entity';
import { CreateProductProductTemplateDto } from './dto/created-product-product-template.dto';
import { UpdatedProductProductTemplateDto } from './dto/updated-product-product-template.dto';
@Controller('product-product-template')
export class ProductProductTemplateController {
  constructor(
    private readonly productProductTemplateService: ProductProductTemplateService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductProductTemplate[]> {
    return await this.productProductTemplateService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductProductTemplateDto: CreateProductProductTemplateDto,
  ): Promise<ProductProductTemplate> {
    return await this.productProductTemplateService.create(
      createaProductProductTemplateDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductProductTemplate> {
    return await this.productProductTemplateService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductProductTemplateDto: UpdatedProductProductTemplateDto,
    @Param('id') id: string,
  ): Promise<ProductProductTemplate> {
    return await this.productProductTemplateService.updated(
      +id,
      updatedProductProductTemplateDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productProductTemplateService.deleted(+id);
  }
}
