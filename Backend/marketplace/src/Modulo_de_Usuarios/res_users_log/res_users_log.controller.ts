import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResUsersLogService } from './res_users_log.service';
import { CreateResUsersLogDto } from './dto/create-res_users_log.dto';
import { UpdateResUsersLogDto } from './dto/update-res_users_log.dto';

@Controller('res-users-log')
export class ResUsersLogController {
  constructor(private readonly resUsersLogService: ResUsersLogService) {}

  @Post()
  create(@Body() createResUsersLogDto: CreateResUsersLogDto) {
    return this.resUsersLogService.create(createResUsersLogDto);
  }

  @Get()
  findAll() {
    return this.resUsersLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resUsersLogService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResUsersLogDto: UpdateResUsersLogDto,
  ) {
    return this.resUsersLogService.update(+id, updateResUsersLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resUsersLogService.remove(+id);
  }
}

//res_users_log: Registra los cambios y acciones realizadas por los usuarios en el sistema, proporcionando un registro de actividades similar a lo que ofrece beneficiosi.

//registro-actividades             # (res_users_log)
