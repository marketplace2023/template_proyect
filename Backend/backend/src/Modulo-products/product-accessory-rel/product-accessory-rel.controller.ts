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
import { ProductAccessoryRelService } from './product-accessory-rel.service';
import { ProductAccessoryRel } from './entities/product-accessory-rel.entity';
import { CreateProductAccessoryRelDto } from './dto/created-product-accessory-rel.dto';
import { UpdatedProductAccessoryRelDto } from './dto/updated-product-accessory-rel.dto';
@Controller('product-accessory-rel')
export class ProductAccessoryRelController {
  constructor(
    private readonly productAccessoryRelService: ProductAccessoryRelService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductAccessoryRel[]> {
    return await this.productAccessoryRelService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductAccessoryRelDto: CreateProductAccessoryRelDto,
  ): Promise<ProductAccessoryRel> {
    return await this.productAccessoryRelService.create(
      createaProductAccessoryRelDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductAccessoryRel> {
    return await this.productAccessoryRelService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductAccessoryRelDto: UpdatedProductAccessoryRelDto,
    @Param('id') id: string,
  ): Promise<ProductAccessoryRel> {
    return await this.productAccessoryRelService.updated(
      +id,
      updatedProductAccessoryRelDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productAccessoryRelService.deleted(+id);
  }
}
