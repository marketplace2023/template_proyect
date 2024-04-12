import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResUsersDeletionService } from './res_users_deletion.service';
import { CreateResUsersDeletionDto } from './dto/create-res_users_deletion.dto';
import { UpdateResUsersDeletionDto } from './dto/update-res_users_deletion.dto';

@Controller('res-users-deletion')
export class ResUsersDeletionController {
  constructor(
    private readonly resUsersDeletionService: ResUsersDeletionService,
  ) {}

  @Post()
  create(@Body() createResUsersDeletionDto: CreateResUsersDeletionDto) {
    return this.resUsersDeletionService.create(createResUsersDeletionDto);
  }

  @Get()
  findAll() {
    return this.resUsersDeletionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.resUsersDeletionService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateResUsersDeletionDto: UpdateResUsersDeletionDto,
  ) {
    return this.resUsersDeletionService.update(+id, updateResUsersDeletionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resUsersDeletionService.remove(+id);
  }
}

//auditoria-usuario                # (res_users_deletion)
// res_users_deletion: Registra los usuarios eliminados, lo que puede ser importante para llevar un registro de los cambios en los usuarios en beneficiosi.
