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
import { ResUsersLog } from './entities/res-users-log.entity';
import { UpdatedResUsersLogDto } from './dto/updated-res-users-log.dto';
import { CreateResUsersLogDto } from './dto/created-res-users-log.dto';
import { ResUsersLogService } from './res-users-log.service';
@Controller('res-users-log')
export class ResUsersLogController {
  constructor(private readonly resUsersLogService: ResUsersLogService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResUsersLog[]> {
    return await this.resUsersLogService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResUsersLogDto: CreateResUsersLogDto,
  ): Promise<ResUsersLog> {
    return await this.resUsersLogService.create(createaResUsersLogDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResUsersLog> {
    return await this.resUsersLogService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResUsersLogDto: UpdatedResUsersLogDto,
    @Param('id') id: string,
  ): Promise<ResUsersLog> {
    return await this.resUsersLogService.updated(+id, updatedResUsersLogDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resUsersLogService.deleted(+id);
  }
}
