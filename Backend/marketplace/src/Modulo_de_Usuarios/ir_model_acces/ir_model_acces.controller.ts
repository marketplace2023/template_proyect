import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrModelAccesService } from './ir_model_acces.service';
import { CreateIrModelAcceDto } from './dto/create-ir_model_acce.dto';
import { UpdateIrModelAcceDto } from './dto/update-ir_model_acce.dto';

@Controller('ir-model-acces')
export class IrModelAccesController {
  constructor(private readonly irModelAccesService: IrModelAccesService) {}

  @Post()
  create(@Body() createIrModelAcceDto: CreateIrModelAcceDto) {
    return this.irModelAccesService.create(createIrModelAcceDto);
  }

  @Get()
  findAll() {
    return this.irModelAccesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irModelAccesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIrModelAcceDto: UpdateIrModelAcceDto,
  ) {
    return this.irModelAccesService.update(+id, updateIrModelAcceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irModelAccesService.remove(+id);
  }
}
//configuracion-permisos            # (ir.model.access)
//ir.model.access: Define los permisos de acceso a otros modelos en la base de datos y se utiliza para controlar quién puede acceder y qué puede hacer en cada modelo, similar a la gestión de permisos en beneficiosi.

//configuracion-acceso-informes-roles-usuario                  # (res.groups, ir.model.access)
//# Configura el acceso a los informes según los roles de usuario.
