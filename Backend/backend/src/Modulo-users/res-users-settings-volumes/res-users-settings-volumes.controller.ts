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
import { ResUsersSettingsVolumesService } from './res-users-settings-volumes.service';
import { ResUsersSettingsVolumes } from './entities/res-users-settings-volumes.entity';
import { CreateResUsersSettingsVolumesDto } from './dto/created-res-users-settings-volumes.dto';
import { UpdatedResUsersSettingsVolumesDto } from './dto/updated-res-users-settings-volumes.dto';

@Controller('res-users-settings-volumes')
export class ResUsersSettingsVolumesController {
  constructor(
    private readonly resUsersSettingsVolumesService: ResUsersSettingsVolumesService,
  ) {}

  //Get
  @Get()
  async paginate(
    @Query('page') page: string = '1',
    @Query('perPage') perPage: string = '10',
  ): Promise<ResUsersSettingsVolumes[]> {
    return await this.resUsersSettingsVolumesService.paginate(+page, +perPage);
  }

  //Post
  @Post()
  async create(
    @Body() createaResUsersSettingsVolumesDto: CreateResUsersSettingsVolumesDto,
  ): Promise<ResUsersSettingsVolumes> {
    return await this.resUsersSettingsVolumesService.create(
      createaResUsersSettingsVolumesDto,
    );
  }

  //Get
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ResUsersSettingsVolumes> {
    return await this.resUsersSettingsVolumesService.findOne(+id);
  }

  //Put
  @Put(':id')
  async updated(
    @Body()
    updatedResUsersSettingsVolumesDto: UpdatedResUsersSettingsVolumesDto,
    @Param('id') id: string,
  ): Promise<ResUsersSettingsVolumes> {
    return await this.resUsersSettingsVolumesService.updated(
      +id,
      updatedResUsersSettingsVolumesDto,
    );
  }

  //Deleteddd
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.resUsersSettingsVolumesService.deleted(+id);
  }
}
