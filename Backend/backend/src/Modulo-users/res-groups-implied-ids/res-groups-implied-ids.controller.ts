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
import { ResGroupsImpliedIdsService } from './res-groups-implied-ids.service';
import { ResGroupsImpliedIds } from './entities/res-groups-implied-ids.entity';
import { CreateResGroupsImpliedIdsDto } from './dto/created-res-groups-implied-ids.dto';
import { UpdatedResGroupsImpliedIdsDto } from './dto/updated-res-groups-implied-ids.dto';
@Controller('res-groups-implied-ids')
export class ResGroupsImpliedIdsController {
  constructor(
    private readonly resGroupsImpliedIdsService: ResGroupsImpliedIdsService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResGroupsImpliedIds[]> {
    return await this.resGroupsImpliedIdsService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResGroupsImpliedIdsDto: CreateResGroupsImpliedIdsDto,
  ): Promise<ResGroupsImpliedIds> {
    return await this.resGroupsImpliedIdsService.create(
      createaResGroupsImpliedIdsDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResGroupsImpliedIds> {
    return await this.resGroupsImpliedIdsService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResGroupsImpliedIdsDto: UpdatedResGroupsImpliedIdsDto,
    @Param('id') id: string,
  ): Promise<ResGroupsImpliedIds> {
    return await this.resGroupsImpliedIdsService.updated(
      +id,
      updatedResGroupsImpliedIdsDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resGroupsImpliedIdsService.deleted(+id);
  }
}
