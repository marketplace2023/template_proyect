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
import { ResGroupsRules } from './entities/res-groups-rules.entity';
import { ResGroupsRulesService } from './res-groups-rules.service';
import { CreateResGroupsRulesDto } from './dto/created-res-groups-rules.dto';
import { UpdatedResGroupsRulesDto } from './dto/updated-res-groups-rules.dto';
@Controller('res-groups-rules')
export class ResGroupsRulesController {
  constructor(private readonly resGroupsRulesService: ResGroupsRulesService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResGroupsRules[]> {
    return await this.resGroupsRulesService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResGroupsRulesDto: CreateResGroupsRulesDto,
  ): Promise<ResGroupsRules> {
    return await this.resGroupsRulesService.create(createaResGroupsRulesDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResGroupsRules> {
    return await this.resGroupsRulesService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResGroupsRulesDto: UpdatedResGroupsRulesDto,
    @Param('id') id: string,
  ): Promise<ResGroupsRules> {
    return await this.resGroupsRulesService.updated(
      +id,
      updatedResGroupsRulesDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resGroupsRulesService.deleted(+id);
  }
}
