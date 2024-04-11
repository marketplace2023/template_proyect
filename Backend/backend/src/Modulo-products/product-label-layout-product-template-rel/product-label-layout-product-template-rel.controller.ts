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
import { ProductLabelLayoutProductTemplateRelService } from './product-label-layout-product-template-rel.service';
import { ProductLabelLayoutProductTemplateRel } from './entities/product-label-layout-product-template-rel.entity';
import { CreateProductLabelLayoutProductTemplateRelDto } from './dto/created-product-label-layout-product-template-rel.dto';
import { UpdatedProductLabelLayoutProductTemplateRelDto } from './dto/updated-product-label-layout-product-template-rel.dto';

@Controller('product-label-layout-product-template-rel')
export class ProductLabelLayoutProductTemplateRelController {
  constructor(
    private readonly productLabelLayoutProductTemplateRelService: ProductLabelLayoutProductTemplateRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductLabelLayoutProductTemplateRel[]> {
    return await this.productLabelLayoutProductTemplateRelService.paginate(
      +page,
      +perPage,
    );
  }

  //Post
  @Post()
  async create(
    @Body()
    createaProductLabelLayoutProductTemplateRelDto: CreateProductLabelLayoutProductTemplateRelDto,
  ): Promise<ProductLabelLayoutProductTemplateRel> {
    return await this.productLabelLayoutProductTemplateRelService.create(
      createaProductLabelLayoutProductTemplateRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(
    @Param('id') id: string,
  ): Promise<ProductLabelLayoutProductTemplateRel> {
    return await this.productLabelLayoutProductTemplateRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedProductLabelLayoutProductTemplateRelDto: UpdatedProductLabelLayoutProductTemplateRelDto,
    @Param('id') id: string,
  ): Promise<ProductLabelLayoutProductTemplateRel> {
    return await this.productLabelLayoutProductTemplateRelService.updated(
      +id,
      updatedProductLabelLayoutProductTemplateRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productLabelLayoutProductTemplateRelService.deleted(+id);
  }
}
