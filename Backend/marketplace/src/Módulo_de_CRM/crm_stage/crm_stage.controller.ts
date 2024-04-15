import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrmStageService } from './crm_stage.service';
import { CreateCrmStageDto } from './dto/create-crm_stage.dto';
import { UpdateCrmStageDto } from './dto/update-crm_stage.dto';

@Controller('crm-stage')
export class CrmStageController {
  constructor(private readonly crmStageService: CrmStageService) {}

  @Post()
  create(@Body() createCrmStageDto: CreateCrmStageDto) {
    return this.crmStageService.create(createCrmStageDto);
  }

  @Get()
  findAll() {
    return this.crmStageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmStageService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrmStageDto: UpdateCrmStageDto,
  ) {
    return this.crmStageService.update(+id, updateCrmStageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmStageService.remove(+id);
  }
}
//seguimiento-etapas                                                              # (public.crm_stage)
//# Realiza el seguimiento de las etapas del proceso de ventas.

//configuracion-etapas                                                           # (public.crm_stage)
//# Configura las etapas del proceso de ventas.

//analisis-etapas                                                                 # (public.crm_stage)
//# Proporciona análisis sobre el progreso y la efectividad de las etapas del proceso de ventas.
