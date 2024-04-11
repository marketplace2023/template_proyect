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
import { FavoritesService } from './favorites.service';
import { Favorites } from './entities/favorites.entity';
import { UpdatedFavoritesDto } from './dto/updated-favorites.dto';
import { CreateFavoritesDto } from './dto/created-favorites.dto';
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<Favorites[]> {
    return await this.favoritesService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesDto: CreateFavoritesDto,
  ): Promise<Favorites> {
    return await this.favoritesService.create(createaFavoritesDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Favorites> {
    return await this.favoritesService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesDto: UpdatedFavoritesDto,
    @Param('id') id: string,
  ): Promise<Favorites> {
    return await this.favoritesService.updated(+id, updatedFavoritesDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesService.deleted(+id);
  }
}
