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
import { ResUsersDeletionService } from './res-users-deletion.service';
import { ResUsersDeletion } from './entities/res-users-deletion.entity';
import { CreateResUsersDeletionDto } from './dto/created-res-users-deletion.dto';
import { UpdatedResUsersDeletionDto } from './dto/updated-res-users-deletion.dto';

@Controller('res-users-deletion')
export class ResUsersDeletionController {
  constructor(
    private readonly resUsersDeletionService: ResUsersDeletionService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResUsersDeletion[]> {
    return await this.resUsersDeletionService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResUsersDeletionDto: CreateResUsersDeletionDto,
  ): Promise<ResUsersDeletion> {
    return await this.resUsersDeletionService.create(
      createaResUsersDeletionDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResUsersDeletion> {
    return await this.resUsersDeletionService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body() updatedResUsersDeletionDto: UpdatedResUsersDeletionDto,
    @Param('id') id: string,
  ): Promise<ResUsersDeletion> {
    return await this.resUsersDeletionService.updated(
      +id,
      updatedResUsersDeletionDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resUsersDeletionService.deleted(+id);
  }
}
