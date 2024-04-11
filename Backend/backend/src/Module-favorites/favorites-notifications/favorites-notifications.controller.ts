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
import { FavoritesNotificationsService } from './favorites-notifications.service';
import { FavoritesNotifications } from './entities/favorites-notifications.entity';
import { CreateFavoritesNotificationsDto } from './dto/created-favorites-notifications.dto';
import { UpdatedFavoritesNotificationsDto } from './dto/updated-favorites-notifications.dto';
@Controller('favorites-notifications')
export class FavoritesNotificationsController {
  constructor(
    private readonly favoritesNotificationsService: FavoritesNotificationsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<FavoritesNotifications[]> {
    return await this.favoritesNotificationsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaFavoritesNotificationsDto: CreateFavoritesNotificationsDto,
  ): Promise<FavoritesNotifications> {
    return await this.favoritesNotificationsService.create(
      createaFavoritesNotificationsDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FavoritesNotifications> {
    return await this.favoritesNotificationsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedFavoritesNotificationsDto: UpdatedFavoritesNotificationsDto,
    @Param('id') id: string,
  ): Promise<FavoritesNotifications> {
    return await this.favoritesNotificationsService.updated(
      +id,
      updatedFavoritesNotificationsDto,
    );
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.favoritesNotificationsService.deleted(+id);
  }
}
