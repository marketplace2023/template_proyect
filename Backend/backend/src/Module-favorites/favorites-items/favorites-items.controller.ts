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
import { FavoritesItems } from './entities/favorites-items.entity';
import { FavoritesItemsItemsService } from './favorites-items.service';
import { CreateFavoritesItemsDto } from './dto/created-favorites-items.dto';
import { UpdatedFavoritesItemsDto } from './dto/updated-favorites-items.dto';
@Controller('favorites-items')
export class FavoritesItemsController {
  constructor(
    private readonly favoritesItemsService: FavoritesItemsItemsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesItems[]> {
    return await this.favoritesItemsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesItemsDto: CreateFavoritesItemsDto,
  ): Promise<FavoritesItems> {
    return await this.favoritesItemsService.create(createaFavoritesItemsDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesItems> {
    return await this.favoritesItemsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesItemsDto: UpdatedFavoritesItemsDto,
    @Param('id') id: string,
  ): Promise<FavoritesItems> {
    return await this.favoritesItemsService.updated(
      +id,
      updatedFavoritesItemsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesItemsService.deleted(+id);
  }
}
