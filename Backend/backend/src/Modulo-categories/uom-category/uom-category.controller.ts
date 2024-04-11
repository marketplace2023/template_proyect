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
import { UpdatedUomCategoryDto } from './dto/updated-uom-category.dto';
import { UomCategory } from './entities/uom-category-entity';
import { CreateUomCategoryDto } from './dto/create-uom-category.dto';
import { UomCategoryService } from './uom-category.service';
@Controller('uom-category')
export class UomCategoryController {
  constructor(private readonly uomCategoryService: UomCategoryService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<UomCategory[]> {
    return await this.uomCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body()
    createaUomCategoryDto: CreateUomCategoryDto,
  ): Promise<UomCategory> {
    return await this.uomCategoryService.create(createaUomCategoryDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UomCategory> {
    return await this.uomCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedUomCategoryDto: UpdatedUomCategoryDto,
    @Param('id') id: string,
  ): Promise<UomCategory> {
    return await this.uomCategoryService.updated(+id, updatedUomCategoryDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.uomCategoryService.deleted(+id);
  }
}
