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
import { FavoritesUsers } from './entities/favorites-users.entity';
import { FavoritesUsersService } from './favorites-users.service';
import { CreateFavoritesUsersDto } from './dto/created-favorites-users.dto';
import { UpdatedFavoritesUsersDto } from './dto/updated-favorites-users.dto';
@Controller('favorites-users')
export class FavoritesUsersController {
  constructor(private readonly favoritesUsersService: FavoritesUsersService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesUsers[]> {
    return await this.favoritesUsersService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesUsersDto: CreateFavoritesUsersDto,
  ): Promise<FavoritesUsers> {
    return await this.favoritesUsersService.create(createaFavoritesUsersDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesUsers> {
    return await this.favoritesUsersService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesUsersDto: UpdatedFavoritesUsersDto,
    @Param('id') id: string,
  ): Promise<FavoritesUsers> {
    return await this.favoritesUsersService.updated(
      +id,
      updatedFavoritesUsersDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesUsersService.deleted(+id);
  }
}
