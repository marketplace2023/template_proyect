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
import { FavoritesCategories } from './entities/favorites-categories.entity';
import { FavoritesCategoriesService } from './favorites-categories.service';
import { CreateFavoritesCategoriesDto } from './dto/created-favorites-categories.dto';
import { UpdatedFavoritesCategoriesDto } from './dto/updated-favorites-categories.dto';

@Controller('favorites-categories')
export class FavoritesCategoriesController {
  constructor(
    private readonly favoritesCategoriesService: FavoritesCategoriesService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesCategories[]> {
    return await this.favoritesCategoriesService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesCategoriesDto: CreateFavoritesCategoriesDto,
  ): Promise<FavoritesCategories> {
    return await this.favoritesCategoriesService.create(
      createaFavoritesCategoriesDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesCategories> {
    return await this.favoritesCategoriesService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesCategoriesDto: UpdatedFavoritesCategoriesDto,
    @Param('id') id: string,
  ): Promise<FavoritesCategories> {
    return await this.favoritesCategoriesService.updated(
      +id,
      updatedFavoritesCategoriesDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesCategoriesService.deleted(+id);
  }
}
