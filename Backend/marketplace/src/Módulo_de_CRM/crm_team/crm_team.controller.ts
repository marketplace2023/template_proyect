import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrmTeamService } from './crm_team.service';
import { CreateCrmTeamDto } from './dto/create-crm_team.dto';
import { UpdateCrmTeamDto } from './dto/update-crm_team.dto';

@Controller('crm-team')
export class CrmTeamController {
  constructor(private readonly crmTeamService: CrmTeamService) {}

  @Post()
  create(@Body() createCrmTeamDto: CreateCrmTeamDto) {
    return this.crmTeamService.create(createCrmTeamDto);
  }

  @Get()
  findAll() {
    return this.crmTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrmTeamDto: UpdateCrmTeamDto) {
    return this.crmTeamService.update(+id, updateCrmTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmTeamService.remove(+id);
  }
}
//asignacion-equipos                                                               # (public.crm_team)
//# Configura la asignación de equipos de trabajo para la gestión de clientes y leads.

//rendimiento-equipos                                                              # (public.crm_team)
//# Proporciona análisis sobre el rendimiento y la eficacia de los equipos de trabajo.
