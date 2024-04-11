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
import { AttributeValueCategoryService } from './attribute-value-category.service';
import { AttributeValueCategory } from './entities/attribute-value-category.entity';
import { CreatedAttributeValueCategoryDto } from './dto/created-attribute-value-category.dto';
import { UpdatedAttributeValueCategoryDto } from './dto/updated-attribute-value-category.dto';
@Controller('attribute-value-category')
export class AttributeValueCategoryController {
  constructor(
    private readonly attributeValueCategoryService: AttributeValueCategoryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<AttributeValueCategory[]> {
    return await this.attributeValueCategoryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadAttributeValueCategoryDto: CreatedAttributeValueCategoryDto,
  ): Promise<AttributeValueCategory> {
    return await this.attributeValueCategoryService.create(
      createadAttributeValueCategoryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AttributeValueCategory> {
    return await this.attributeValueCategoryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedAttributeValueCategoryDto: UpdatedAttributeValueCategoryDto,
    @Param('id') id: string,
  ): Promise<AttributeValueCategory> {
    return await this.attributeValueCategoryService.updated(
      +id,
      updatedAttributeValueCategoryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.attributeValueCategoryService.deleted(+id);
  }
}
