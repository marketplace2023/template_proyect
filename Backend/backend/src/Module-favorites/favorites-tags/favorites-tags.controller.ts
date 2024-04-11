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
import { FavoritesTagsService } from './favorites-tags.service';
import { FavoritesTags } from './entities/favorites-tags.entity';
import { CreateFavoritesTagsDto } from './dto/created-favorites-tags.dto';
import { UpdatedFavoritesTagsDto } from './dto/updated-favorites-tags.dto';
@Controller('favorites-tags')
export class FavoritesTagsController {
  constructor(private readonly favoritesTagsService: FavoritesTagsService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesTags[]> {
    return await this.favoritesTagsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesTagsDto: CreateFavoritesTagsDto,
  ): Promise<FavoritesTags> {
    return await this.favoritesTagsService.create(createaFavoritesTagsDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesTags> {
    return await this.favoritesTagsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesTagsDto: UpdatedFavoritesTagsDto,
    @Param('id') id: string,
  ): Promise<FavoritesTags> {
    return await this.favoritesTagsService.updated(
      +id,
      updatedFavoritesTagsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesTagsService.deleted(+id);
  }
}
