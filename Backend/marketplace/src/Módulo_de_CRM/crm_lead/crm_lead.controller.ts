import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrmLeadService } from './crm_lead.service';
import { CreateCrmLeadDto } from './dto/create-crm_lead.dto';
import { UpdateCrmLeadDto } from './dto/update-crm_lead.dto';

@Controller('crm-lead')
export class CrmLeadController {
  constructor(private readonly crmLeadService: CrmLeadService) {}

  @Post()
  create(@Body() createCrmLeadDto: CreateCrmLeadDto) {
    return this.crmLeadService.create(createCrmLeadDto);
  }

  @Get()
  findAll() {
    return this.crmLeadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crmLeadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCrmLeadDto: UpdateCrmLeadDto) {
    return this.crmLeadService.update(+id, updateCrmLeadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crmLeadService.remove(+id);
  }
}
//gestion-leads                                                                    # (public.crm_lead)
//# Gestiona los leads, es decir, clientes potenciales o prospectos de ventas.

//analisis-leads                                                                  # (public.crm_lead)
//# Proporciona análisis sobre los leads o clientes potenciales.
