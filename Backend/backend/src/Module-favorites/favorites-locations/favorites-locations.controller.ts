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
import { FavoritesLocations } from './entities/favorites-locations.entity';
import { UpdatedFavoritesLocationsDto } from './dto/updated-favorites-locations.dto';
import { CreateFavoritesLocationsDto } from './dto/created-favorites-locations.dto';
import { FavoritesLocationsService } from './favorites-locations.service';
@Controller('favorites-locations')
export class FavoritesLocationsController {
  constructor(
    private readonly favoritesLocationsService: FavoritesLocationsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesLocations[]> {
    return await this.favoritesLocationsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesLocationsDto: CreateFavoritesLocationsDto,
  ): Promise<FavoritesLocations> {
    return await this.favoritesLocationsService.create(
      createaFavoritesLocationsDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesLocations> {
    return await this.favoritesLocationsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesLocationsDto: UpdatedFavoritesLocationsDto,
    @Param('id') id: string,
  ): Promise<FavoritesLocations> {
    return await this.favoritesLocationsService.updated(
      +id,
      updatedFavoritesLocationsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesLocationsService.deleted(+id);
  }
}
