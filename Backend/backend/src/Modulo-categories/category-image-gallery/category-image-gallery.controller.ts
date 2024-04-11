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
import { CategoryImageGallery } from './entities/category-image-gallery.entity';
import { CreatedCategoryImageGalleryDto } from './dto/created-category-image-gallery.dto';
import { CategoryImageGalleryService } from './category-image-gallery.service';
import { UpdatedCategoryImageGalleryDto } from './dto/updated-category-image-gallery.dto';

@Controller('category-image-gallery')
export class CategoryImageGalleryController {
  constructor(
    private readonly categoryImageGalleryService: CategoryImageGalleryService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<CategoryImageGallery[]> {
    return await this.categoryImageGalleryService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createadCategoryImageGalleryDto: CreatedCategoryImageGalleryDto,
  ): Promise<CategoryImageGallery> {
    return await this.categoryImageGalleryService.create(
      createadCategoryImageGalleryDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryImageGallery> {
    return await this.categoryImageGalleryService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedCategoryImageGalleryDto: UpdatedCategoryImageGalleryDto,
    @Param('id') id: string,
  ): Promise<CategoryImageGallery> {
    return await this.categoryImageGalleryService.updated(
      +id,
      updatedCategoryImageGalleryDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.categoryImageGalleryService.deleted(+id);
  }
}
