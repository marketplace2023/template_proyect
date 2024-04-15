import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IrModelService } from './ir_model.service';
import { CreateIrModelDto } from './dto/create-ir_model.dto';
import { UpdateIrModelDto } from './dto/update-ir_model.dto';

@Controller('ir-model')
export class IrModelController {
  constructor(private readonly irModelService: IrModelService) {}

  @Post()
  create(@Body() createIrModelDto: CreateIrModelDto) {
    return this.irModelService.create(createIrModelDto);
  }

  @Get()
  findAll() {
    return this.irModelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.irModelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIrModelDto: UpdateIrModelDto) {
    return this.irModelService.update(+id, updateIrModelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.irModelService.remove(+id);
  }
}
//configuracion-modelos                                                            # (public.ir_model)
//# Configura los modelos de datos utilizados en la aplicación.

//gestion-modelos                                                                 # (public.ir_model)
//# Configura los modelos de datos utilizados en la aplicación.

//analisis-modelos                                                                 # (public.ir_model)
//# Realiza análisis sobre los modelos de datos utilizados en la aplicación.
