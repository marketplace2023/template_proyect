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
import { FavoritesCompaniesService } from './favorites-companies.service';
import { FavoritesCompanies } from './entities/favorites-companies.entity';
import { CreateFavoritesCompaniesDto } from './dto/created-favorites-companies.dto';
import { UpdatedFavoritesCompaniesDto } from './dto/updated-favorites-companies.dto';
@Controller('favorites-companies')
export class FavoritesCompaniesController {
  constructor(
    private readonly favoritesCompaniesService: FavoritesCompaniesService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesCompanies[]> {
    return await this.favoritesCompaniesService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesCompaniesDto: CreateFavoritesCompaniesDto,
  ): Promise<FavoritesCompanies> {
    return await this.favoritesCompaniesService.create(
      createaFavoritesCompaniesDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesCompanies> {
    return await this.favoritesCompaniesService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesCompaniesDto: UpdatedFavoritesCompaniesDto,
    @Param('id') id: string,
  ): Promise<FavoritesCompanies> {
    return await this.favoritesCompaniesService.updated(
      +id,
      updatedFavoritesCompaniesDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesCompaniesService.deleted(+id);
  }
}
