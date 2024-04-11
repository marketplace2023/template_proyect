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
import { UpdatedProductsCategoryDto } from 'src/Modulo-products/products-category/dto/updated-products-category.dto';
import { PosCategory } from './entities/pos-category.entity';
import { CreatePosCategoryDto } from './dto/create-pos-category.dto';
import { PosCategoryService } from './pos-category.service';

@Controller('pos-category')
export class PosCategoryController {
  constructor(private readonly posCategoryService: PosCategoryService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<PosCategory[]> {
    return await this.posCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaPosCategoryDto: CreatePosCategoryDto,
  ): Promise<PosCategory> {
    return await this.posCategoryService.create(createaPosCategoryDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PosCategory> {
    return await this.posCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedPosCategoryDto: UpdatedProductsCategoryDto,
    @Param('id') id: string,
  ): Promise<PosCategory> {
    return await this.posCategoryService.updated(+id, updatedPosCategoryDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.posCategoryService.deleted(+id);
  }
}
