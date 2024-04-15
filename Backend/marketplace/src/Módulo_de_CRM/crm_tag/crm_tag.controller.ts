import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrmTagService } from './crm_tag.service';
import { CreateCrmTagDto } from './dto/create-crm_tag.dto';
import { UpdateCrmTagDto } from './dto/update-crm_tag.dto';

@Controller('crm-tag')
export class CrmTagController {
  constructor(private readonly crmTagService: CrmTagService) {}

  @Post()
  create(@Body() createCrmTagDto: CreateCrmTagDto) {
    return this.crmTagService.create(createCrmTagDto);
  }

  @Get()
  findAll() {
    return this.crmTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrmTagDto: UpdateCrmTagDto) {
    return this.crmTagService.update(+id, updateCrmTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmTagService.remove(+id);
  }
}
//segmentacion-etiquetas                                                            # (public.crm_tag)
//# Permite la segmentación de leads y clientes mediante etiquetas.

//gestion-etiquetas                                                                # (public.crm_tag)
//# Gestiona las etiquetas utilizadas para segmentar los leads y clientes.

//analisis-etiquetas                                                                # (public.crm_tag)
//# Proporciona análisis sobre la segmentación de leads y clientes mediante etiquetas.
