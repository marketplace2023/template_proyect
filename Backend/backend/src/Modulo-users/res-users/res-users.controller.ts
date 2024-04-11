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
import { ResUsers } from './entities/res-users.entity';
import { ResUsersService } from './res-users.service';
import { CreateResUsersDto } from './dto/create-res-users.dto';
import { UpdatedResUsersDto } from './dto/updated-res-users.dto';

@Controller('res-users')
export class ResUsersController {
  constructor(private readonly resUsersService: ResUsersService) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResUsers[]> {
    return await this.resUsersService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResUsersDto: CreateResUsersDto,
  ): Promise<ResUsers> {
    return await this.resUsersService.create(createaResUsersDto);
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResUsers> {
    return await this.resUsersService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResUsersDto: UpdatedResUsersDto,
    @Param('id') id: string,
  ): Promise<ResUsers> {
    return await this.resUsersService.updated(+id, updatedResUsersDto);
  }

  //Delete
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resUsersService.deleted(+id);
  }
}
