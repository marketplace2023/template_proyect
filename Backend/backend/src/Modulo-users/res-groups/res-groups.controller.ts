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
import { UpdatedResGroupsDto } from './dto/updated-res-groups.dto';
import { ResGroups } from './entities/res-groups.entity';
import { CreateResGroupsDto } from './dto/create-res-groups.dto';
import { ResGroupsService } from './res-groups.service';

@Controller('res-groups')
export class ResGroupsController {
  constructor(private readonly resGroupsService: ResGroupsService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResGroups[]> {
    return await this.resGroupsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResGroupsDto: CreateResGroupsDto,
  ): Promise<ResGroups> {
    return await this.resGroupsService.create(createaResGroupsDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResGroups> {
    return await this.resGroupsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResGroupsDto: UpdatedResGroupsDto,
    @Param('id') id: string,
  ): Promise<ResGroups> {
    return await this.resGroupsService.updated(+id, updatedResGroupsDto);
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resGroupsService.deleted(+id);
  }
}
