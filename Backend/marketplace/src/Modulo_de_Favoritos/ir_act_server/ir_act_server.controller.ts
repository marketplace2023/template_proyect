import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrActServerService } from './ir_act_server.service';
import { CreateIrActServerDto } from './dto/create-ir_act_server.dto';
import { UpdateIrActServerDto } from './dto/update-ir_act_server.dto';

@Controller('ir-act-server')
export class IrActServerController {
  constructor(private readonly irActServerService: IrActServerService) {}

  @Post()
  create(@Body() createIrActServerDto: CreateIrActServerDto) {
    return this.irActServerService.create(createIrActServerDto);
  }

  @Get()
  findAll() {
    return this.irActServerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irActServerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIrActServerDto: UpdateIrActServerDto,
  ) {
    return this.irActServerService.update(+id, updateIrActServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irActServerService.remove(+id);
  }
}
//gestion-acciones-servidor                                                 # (public.ir_act_server)
//# Administra las acciones del servidor, como la ejecución de funciones específicas en respuesta a eventos.

//configuracion-acciones-servidor                                             # (public.ir_act_server)
//# Configura las acciones del servidor, como asignar funciones a eventos específicos.

//analisis-acciones-servidor                                                  # (public.ir_act_server)
//# Realiza análisis sobre las acciones del servidor, como su frecuencia de uso y eficacia.
