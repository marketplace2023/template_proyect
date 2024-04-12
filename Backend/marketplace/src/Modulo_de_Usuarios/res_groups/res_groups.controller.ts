import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResGroupsService } from './res_groups.service';
import { CreateResGroupDto } from './dto/create-res_group.dto';
import { UpdateResGroupDto } from './dto/update-res_group.dto';

@Controller('res-groups')
export class ResGroupsController {
  constructor(private readonly resGroupsService: ResGroupsService) {}

  @Post()
  create(@Body() createResGroupDto: CreateResGroupDto) {
    return this.resGroupsService.create(createResGroupDto);
  }

  @Get()
  findAll() {
    return this.resGroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResGroupDto: UpdateResGroupDto,
  ) {
    return this.resGroupsService.update(+id, updateResGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resGroupsService.remove(+id);
  }
}

//gestion-grupos-usuarios                    # (res_groups)

//res_groups: Representa los grupos de usuarios y se utiliza para asignar permisos y roles a los usuarios.
