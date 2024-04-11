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
import { FavoritesGroupsService } from './favorites-groups.service';
import { UpdatedFavoritesGroupsDto } from './dto/updated-favorites-groups.dto';
import { FavoritesGroups } from './entities/favorites-groups.entity';
import { CreateFavoritesGroupsDto } from './dto/created-favorites-groups.dto';
@Controller('favorites-groups')
export class FavoritesGroupsController {
  constructor(
    private readonly favoritesGroupsService: FavoritesGroupsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesGroups[]> {
    return await this.favoritesGroupsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesGroupsDto: CreateFavoritesGroupsDto,
  ): Promise<FavoritesGroups> {
    return await this.favoritesGroupsService.create(createaFavoritesGroupsDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesGroups> {
    return await this.favoritesGroupsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesGroupsDto: UpdatedFavoritesGroupsDto,
    @Param('id') id: string,
  ): Promise<FavoritesGroups> {
    return await this.favoritesGroupsService.updated(
      +id,
      updatedFavoritesGroupsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesGroupsService.deleted(+id);
  }
}
