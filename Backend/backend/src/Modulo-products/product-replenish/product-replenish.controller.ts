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
import { ProductReplenishService } from './product-replenish.service';
import { ProductReplenish } from './entities/product-replenish.entity';
import { CreateProductReplenishDto } from './dto/created-product-replenish.dto';
import { UpdatedProductReplenishDto } from './dto/updated-product-replenish.dto';
@Controller('product-replenish')
export class ProductReplenishController {
  constructor(
    private readonly productReplenishService: ProductReplenishService,
  ) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductReplenish[]> {
    console.log('hola');
    return await this.productReplenishService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductReplenishDto: CreateProductReplenishDto,
  ): Promise<ProductReplenish> {
    return await this.productReplenishService.create(
      createaProductReplenishDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductReplenish> {
    return await this.productReplenishService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductReplenishDto: UpdatedProductReplenishDto,
    @Param('id') id: string,
  ): Promise<ProductReplenish> {
    return await this.productReplenishService.updated(
      +id,
      updatedProductReplenishDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productReplenishService.deleted(+id);
  }
}
