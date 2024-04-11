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
import { ProductRemoval } from './entities/product-removal.emtity';
import { UpdatedProductRemovalDto } from './dto/updated-product-removal.dto';
import { CreateProductRemovalDto } from './dto/created-product-removal.dto';
import { ProductRemovalService } from './product-removal.service';
@Controller('product-removal')
export class ProductRemovalController {
  constructor(private readonly productRemovalService: ProductRemovalService) {}
  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ProductRemoval[]> {
    return await this.productRemovalService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaProductRemovalDto: CreateProductRemovalDto,
  ): Promise<ProductRemoval> {
    return await this.productRemovalService.create(createaProductRemovalDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductRemoval> {
    return await this.productRemovalService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedProductRemovalDto: UpdatedProductRemovalDto,
    @Param('id') id: string,
  ): Promise<ProductRemoval> {
    return await this.productRemovalService.updated(
      +id,
      updatedProductRemovalDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.productRemovalService.deleted(+id);
  }
}
