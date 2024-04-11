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
import { CategoryDescriptionService } from './category-description.service';
import { CategoryDescription } from './entities/category-description.entity';
import { CreatedCategoryDescriptionDto } from './dto/created-category-description.dto';
import { UpdatedCategoryDescriptionDto } from './dto/updated-category-description.dto';
@Controller('category-description')
export class CategoryDescriptionController {
  constructor(
    private readonly categoryDescriptionService: CategoryDescriptionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<CategoryDescription[]> {
    return await this.categoryDescriptionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadCategoryDescriptionDto: CreatedCategoryDescriptionDto,
  ): Promise<CategoryDescription> {
    return await this.categoryDescriptionService.create(
      createadCategoryDescriptionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryDescription> {
    return await this.categoryDescriptionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedCategoryDescriptionDto: UpdatedCategoryDescriptionDto,
    @Param('id') id: string,
  ): Promise<CategoryDescription> {
    return await this.categoryDescriptionService.updated(
      +id,
      updatedCategoryDescriptionDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.categoryDescriptionService.deleted(+id);
  }
}
