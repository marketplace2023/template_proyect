import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrActWindowsService } from './ir_act_windows.service';
import { CreateIrActWindowDto } from './dto/create-ir_act_window.dto';
import { UpdateIrActWindowDto } from './dto/update-ir_act_window.dto';

@Controller('ir-act-windows')
export class IrActWindowsController {
  constructor(private readonly irActWindowsService: IrActWindowsService) {}

  @Post()
  create(@Body() createIrActWindowDto: CreateIrActWindowDto) {
    return this.irActWindowsService.create(createIrActWindowDto);
  }

  @Get()
  findAll() {
    return this.irActWindowsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irActWindowsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIrActWindowDto: UpdateIrActWindowDto,
  ) {
    return this.irActWindowsService.update(+id, updateIrActWindowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irActWindowsService.remove(+id);
  }
}
// definicion-acciones-ventana                                                 # (public.ir_act_window)
//# Define las acciones que abren nuevas ventanas en la interfaz de usuario.

//definicion-acciones-ventana                                                # (public.ir_act_window)
//# Define las acciones que abren nuevas ventanas en la interfaz de usuario.

//analisis-acciones-ventana                                                  # (public.ir_act_window)
//# Analiza el rendimiento y la utilidad de las acciones que abren ventanas en la interfaz de usuario.
